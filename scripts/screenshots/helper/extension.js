// Runs VS Code commands for scripts/screenshots/index.js.
// The script starts VS Code with VALLEY_SCREENSHOT_PORT set and posts one
// JSON request per step, such as { "op": "open", "file": "demo/css.css", "top": 50 }.

const http = require('http');
const path = require('path');
const vscode = require('vscode');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const workspaceUri = file => vscode.Uri.file(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, file));

// Language servers and git start in the background, so wait until they answer
const waitFor = async (check, what, timeout = 30000) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    if (await check()) return true;
    await sleep(250);
  }
  throw new Error(`Timed out waiting for ${what}`);
};

const gitApi = async () => {
  const extension = vscode.extensions.getExtension('vscode.git');
  const exports = extension.isActive ? extension.exports : await extension.activate();
  return exports.getAPI(1);
};

const gitChanges = async () => {
  const api = await gitApi();
  const repository = api.repositories[0];
  return repository ? repository.state.workingTreeChanges.length : 0;
};

const ops = {
  ping: async () => 'pong',

  // Some commands only finish after a click, such as a notification with buttons
  command: async ({ id, args = [], timeout = 5000 }) => {
    await Promise.race([vscode.commands.executeCommand(id, ...args), sleep(timeout)]);
  },

  // Opens a file, puts the cursor at line:column and scrolls `top` to the top
  open: async ({ file, line = 1, column = 1, top }) => {
    const document = await vscode.workspace.openTextDocument(workspaceUri(file));
    const editor = await vscode.window.showTextDocument(document, { preview: false });
    const position = new vscode.Position(line - 1, column - 1);
    editor.selection = new vscode.Selection(position, position);
    const topLine = (top ?? line) - 1;
    editor.revealRange(new vscode.Range(topLine, 0, topLine, 0), vscode.TextEditorRevealType.AtTop);
  },

  waitForHover: async ({ file, line, column }) => {
    const position = new vscode.Position(line - 1, column - 1);
    await waitFor(async () => {
      const hovers = await vscode.commands.executeCommand('vscode.executeHoverProvider', workspaceUri(file), position);
      return hovers && hovers.some(hover => hover.contents.length > 0);
    }, `a hover in ${file}`);
  },

  waitForDefinition: async ({ file, line, column }) => {
    const position = new vscode.Position(line - 1, column - 1);
    await waitFor(async () => {
      const definitions = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', workspaceUri(file), position);
      return definitions && definitions.length > 0;
    }, `a definition in ${file}`);
  },

  // Semantic highlighting recolors some tokens once the language server answers
  waitForSemanticTokens: async ({ file }) => {
    await waitFor(async () => {
      const tokens = await vscode.commands.executeCommand('vscode.provideDocumentSemanticTokens', workspaceUri(file));
      return tokens && tokens.data && tokens.data.length > 0;
    }, `semantic tokens in ${file}`);
  },

  waitForDiagnostics: async ({ file }) => {
    await waitFor(() => vscode.languages.getDiagnostics(workspaceUri(file)).length > 0, `diagnostics in ${file}`);
  },

  waitForGit: async () => {
    await waitFor(async () => (await gitChanges()) > 0, 'git changes');
  },

  // Opens the working tree changes of a file, like "Open Changes" in the Source Control view
  diff: async ({ file }) => {
    const api = await gitApi();
    const uri = workspaceUri(file);
    await vscode.commands.executeCommand('vscode.diff', api.toGitUri(uri, 'HEAD'), uri, `${path.basename(file)} (Working Tree)`);
  },

  // A bash without the user's shell configuration, so the output looks the same everywhere
  terminal: async ({ commands = [] }) => {
    const terminal = vscode.window.createTerminal({
      name: 'bash',
      shellPath: '/bin/bash',
      shellArgs: ['--noprofile', '--norc'],
      cwd: vscode.workspace.workspaceFolders[0].uri,
      env: {
        PS1: '\\[\\e[36m\\]\\W\\[\\e[0m\\] \\[\\e[35m\\]$\\[\\e[0m\\] ',
        BASH_SILENCE_DEPRECATION_WARNING: '1',
        CLICOLOR: '1',
        GIT_PAGER: 'cat',
        LANG: 'en_US.UTF-8',
      },
    });
    terminal.show(false);
    await sleep(1000);
    for (const command of commands) {
      terminal.sendText(command);
      await sleep(500);
    }
  },
};

function activate(context) {
  const port = Number(process.env.VALLEY_SCREENSHOT_PORT);
  if (!port) return;

  const server = http.createServer((request, response) => {
    let body = '';
    request.on('data', chunk => { body += chunk; });
    request.on('end', async () => {
      try {
        const step = JSON.parse(body || '{}');
        const op = ops[step.op];
        if (!op) throw new Error(`Unknown op: ${step.op}`);
        const result = await op(step);
        response.end(JSON.stringify({ ok: true, result }));
      } catch (error) {
        response.end(JSON.stringify({ ok: false, error: String(error && error.message || error) }));
      }
    });
  });

  server.listen(port, '127.0.0.1');
  context.subscriptions.push({ dispose: () => server.close() });
}

module.exports = { activate };
