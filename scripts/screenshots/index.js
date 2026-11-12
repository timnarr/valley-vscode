/**
 * Renews the screenshots in screenshots/.
 *
 *   npm run screenshots                         all motifs
 *   npm run screenshots -- valley-vscode-title  only the named motifs
 *   npm run screenshots -- --keep               keep the temporary profile and workspace
 *
 * Starts the installed VS Code with a separate profile, the theme from this
 * repository and the settings and extensions recommended in the README, then
 * stages each motif from motifs.js, saves it at 1080×720 with 2× pixels and
 * compresses it losslessly with oxipng. Needs macOS, VS Code, the JetBrains
 * Mono font, oxipng and a network connection for the recommended extensions.
 * `npm run build` runs it too; in CI and outside macOS it is skipped.
 */

import { execFileSync, spawn } from 'child_process';
import fs from 'fs';
import net from 'net';
import os from 'os';
import path from 'path';
import { setTimeout as sleep } from 'timers/promises';
import { fileURLToPath } from 'url';
import motifs, { prepareWorkspace } from './motifs.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const outDir = path.join(repo, 'screenshots');

const app = process.env.VSCODE_APP || '/Applications/Visual Studio Code.app';
const codeBinary = path.join(app, 'Contents/MacOS/Code');
const codeCli = path.join(app, 'Contents/Resources/app/bin/code');
const vsce = ['--yes', '@vscode/vsce@4.1.0'];

const WIDTH = 1080;
const HEIGHT = 720;
const SCALE = 2;
// A new screenshot replaces the old one only when more pixels differ than this.
// Text and icons at fractional positions sometimes come out a few pixels
// different; any real color change touches far more pixels.
const NOISE_PIXELS = 30;

// The "Recommended Settings" from the README, so the screenshots show what it
// promises. The extensions it links to on the Marketplace are installed too.
const readmeRecommendations = () => {
  const readme = fs.readFileSync(path.join(repo, 'README.md'), 'utf8');
  const section = readme.split(/^## Recommended Settings$/m)[1]?.split(/^## /m)[0] ?? '';
  const block = section.match(/```json\n([\s\S]*?)```/)?.[1];
  if (!block) throw new Error('README.md has no ```json block under "## Recommended Settings"');
  const extensions = [...block.matchAll(/itemName=([\w.-]+)/g)].map(match => match[1]);
  // The block lists settings between comments; without the comments it is the inside of a JSON object
  const json = block.split('\n').filter(line => !line.trim().startsWith('//')).join('\n').trim().replace(/,$/, '');
  return { settings: JSON.parse(`{${json}}`), extensions };
};

// The settings that keep the screenshots calm and repeatable
const screenshotSettings = {
  'workbench.experimental.modernUI': true,
  'window.density.layout': 'default',
  'workbench.reduceMotion': 'on',
  'editor.cursorBlinking': 'solid',
  'editor.lightbulb.enabled': 'off',
  'editor.stickyScroll.enabled': false,
  'workbench.editor.enablePreview': false,
  'workbench.editor.empty.hint': 'hidden',
  'diffEditor.useInlineViewWhenSpaceIsLimited': false,
  'zenMode.fullScreen': false,
  // Whether "Go Back" is enabled would depend on the motifs before
  'workbench.navigationControl.enabled': false,
  // VS Code keeps lint warnings of closed files for a while, so they would show
  // in the status bar of later motifs; JSON keeps its errors for the JSON motifs
  'css.validate': false,
  'scss.validate': false,
  'less.validate': false,
  'html.validate.scripts': false,
  'html.validate.styles': false,
  'terminal.integrated.cursorBlinking': false,
  'terminal.integrated.suggest.enabled': false,
  'terminal.integrated.stickyScroll.enabled': false,
  'chat.disableAIFeatures': true,
  'workbench.secondarySideBar.defaultVisibility': 'hidden',
  'workbench.startupEditor': 'none',
  'workbench.tips.enabled': false,
  'workbench.welcomePage.walkthroughs.openOnInstall': false,
  'security.workspace.trust.enabled': false,
  'window.restoreWindows': 'none',
  'files.hotExit': 'off',
  'git.autofetch': false,
  'git.blame.statusBarItem.enabled': false,
  'git.openRepositoryInParentFolders': 'never',
  'extensions.ignoreRecommendations': true,
  'extensions.autoUpdate': false,
  'extensions.autoCheckUpdates': false,
  'json.schemaDownload.enable': false,
  'typescript.disableAutomaticTypeAcquisition': true,
  'telemetry.telemetryLevel': 'off',
  'update.mode': 'none',
};

const args = process.argv.slice(2);
const keep = args.includes('--keep');
const only = args.filter(arg => !arg.startsWith('--'));
const selected = only.length ? motifs.filter(motif => only.includes(motif.name)) : motifs;

const run = (command, commandArgs, options = {}) =>
  execFileSync(command, commandArgs, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', ...options });

const fail = (message) => {
  console.error(`💥 ${message}`);
  process.exit(1);
};

// The build runs this script too, but CI has no VS Code window to take pictures of
if (process.env.CI || process.platform !== 'darwin') {
  console.log('⏭  Skipping the screenshots: they need macOS with VS Code');
  process.exit(0);
}

const unknown = only.filter(name => !motifs.some(motif => motif.name === name));
if (unknown.length) fail(`Unknown motifs: ${unknown.join(', ')}`);
if (!fs.existsSync(codeBinary)) fail(`VS Code not found at ${app}. Set VSCODE_APP to its path.`);
try {
  run('oxipng', ['--version']);
} catch {
  fail('oxipng not found. Install it with: brew install oxipng');
}

const freePort = () => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.on('error', reject);
  server.listen(0, '127.0.0.1', () => {
    const { port } = server.address();
    server.close(() => resolve(port));
  });
});

const waitUntil = async (check, what, timeout = 60000, interval = 500) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    try {
      const result = await check();
      if (result) return result;
    } catch {
      // not ready yet
    }
    await sleep(interval);
  }
  throw new Error(`Timed out waiting for ${what}`);
};

// Minimal Chrome DevTools Protocol client for the VS Code window
const connectDevTools = async (port) => {
  const page = await waitUntil(async () => {
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    return targets.find(target => target.type === 'page' && target.url.includes('workbench'));
  }, 'the VS Code window', 60000, 100);

  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });

  let id = 0;
  const pending = new Map();
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (!pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  };

  return {
    send: (method, params = {}) => new Promise((resolve, reject) => {
      id += 1;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    }),
    close: () => socket.close(),
  };
};

const main = async () => {
  // The real path: on macOS /var is a link to /private/var, and the language
  // servers would otherwise treat the workspace files as outside the workspace
  const temp = fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), 'valley-'));
  const profile = path.join(temp, 'profile');
  const extensions = path.join(temp, 'extensions');
  const workspace = path.join(temp, 'valley-vscode');
  let vscode;

  try {
    const recommended = readmeRecommendations();

    console.log('📦 Packaging the theme and the screenshot helper');
    const themeVsix = path.join(temp, 'valley.vsix');
    const helperVsix = path.join(temp, 'helper.vsix');
    run('npx', [...vsce, 'package', '--no-dependencies', '--out', themeVsix], { cwd: repo });
    run('npx', [...vsce, 'package', '--no-dependencies', '--skip-license', '--allow-missing-repository', '--out', helperVsix], { cwd: path.join(here, 'helper') });

    console.log(`🧩 Installing them and ${recommended.extensions.join(', ')} into a separate profile`);
    run(codeCli, [
      '--user-data-dir', profile, '--extensions-dir', extensions,
      ...[themeVsix, helperVsix, ...recommended.extensions].flatMap(extension => ['--install-extension', extension]),
      '--force',
    ]);
    fs.mkdirSync(path.join(profile, 'User'), { recursive: true });
    fs.writeFileSync(path.join(profile, 'User/settings.json'), JSON.stringify({ ...recommended.settings, ...screenshotSettings }, null, 2));

    console.log('🗂  Copying the repository into a Git workspace');
    fs.mkdirSync(workspace);
    run('sh', ['-c', 'git -C "$1" archive --format=tar HEAD | tar -x -C "$2"', 'sh', repo, workspace]);
    // A fixed date keeps the commit hash, which the terminal shows, the same on every run
    const gitEnv = { ...process.env, GIT_AUTHOR_DATE: '2020-03-04T12:00:00Z', GIT_COMMITTER_DATE: '2020-03-04T12:00:00Z' };
    const git = (...gitArgs) => run('git', ['-c', 'user.name=Valley', '-c', 'user.email=valley@example.invalid', '-c', 'commit.gpgsign=false', ...gitArgs], { cwd: workspace, env: gitEnv });
    git('init', '-q', '-b', 'main');
    git('add', '-A');
    git('commit', '-q', '-m', 'Valley');
    prepareWorkspace(workspace);

    const devToolsPort = await freePort();
    const helperPort = await freePort();
    // HOME is the temporary folder: peek views show paths as ~/valley-vscode/…,
    // and Git and the shell don't pick up your own configuration
    const env = { ...process.env, HOME: temp, VALLEY_SCREENSHOT_PORT: String(helperPort) };
    // Set when this runs from a VS Code terminal; it would start VS Code as plain Node
    delete env.ELECTRON_RUN_AS_NODE;

    console.log('🚀 Starting VS Code; please leave its window alone until the script is done');
    vscode = spawn(codeBinary, [
      `--user-data-dir=${profile}`, `--extensions-dir=${extensions}`, `--remote-debugging-port=${devToolsPort}`,
      // Without a keychain in the temporary HOME, macOS would ask where to store "Code Key"
      '--use-mock-keychain',
      '--new-window', '--skip-welcome', '--skip-release-notes', workspace,
    ], { env, stdio: 'ignore' });

    const helper = async (step) => {
      const response = await fetch(`http://127.0.0.1:${helperPort}/`, {
        method: 'POST',
        body: JSON.stringify(step),
        signal: AbortSignal.timeout(60000),
      });
      const answer = await response.json();
      if (!answer.ok) throw new Error(`${step.op} ${step.id ?? step.file ?? ''}: ${answer.error}`);
      return answer.result;
    };
    const runSteps = async (steps = []) => {
      for (const step of steps) {
        if (step.op === 'wait') await sleep(step.ms);
        else await helper(step);
      }
    };

    // Connect while the window is still loading: VS Code asks whether it has focus
    // only in its first seconds, and macOS often keeps a window started in the
    // background behind the others. With focus emulation on from the start,
    // VS Code draws itself as the active window either way.
    const devTools = await connectDevTools(devToolsPort);
    await devTools.send('Emulation.setFocusEmulationEnabled', { enabled: true });
    await devTools.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: SCALE, mobile: false });
    await waitUntil(() => helper({ op: 'ping' }), 'the screenshot helper', 90000);
    // Things that depend on timing or on the real mouse rather than on the theme:
    // scrollbars appear for a moment after each scroll, so keep them at rest, as
    // VS Code looks when nobody scrolls; the text cursor of input boxes blinks;
    // and a pointer resting over the window would light up a sash or a list row.
    const steadyCss = [
      '.monaco-scrollable-element > .scrollbar { opacity: 0 !important; transition: none !important; }',
      'input, textarea { caret-color: transparent !important; }',
      'body { pointer-events: none !important; }',
    ].join(' ');
    await devTools.send('Runtime.evaluate', {
      expression: `document.head.append(Object.assign(document.createElement('style'), { textContent: ${JSON.stringify(steadyCss)} }))`,
    });
    // Let the language servers, git and the icon theme settle
    await sleep(5000);

    // True when every selector matches an element that is on screen
    const isShown = async (selectors = []) => {
      const expression = `${JSON.stringify(selectors)}.every(selector =>
        [...document.querySelectorAll(selector)].some(element => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden'))`;
      const { result } = await devTools.send('Runtime.evaluate', { expression, returnByValue: true });
      return result.value === true;
    };

    // Counts the pixels that differ between two PNGs, using the window's own canvas
    const differingPixels = async (pngA, pngB) => {
      const expression = `(async () => {
        const pixels = async (png) => {
          const image = new Image();
          image.src = 'data:image/png;base64,' + png;
          await image.decode();
          const canvas = new OffscreenCanvas(image.width, image.height);
          const context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          return context.getImageData(0, 0, image.width, image.height);
        };
        const [a, b] = await Promise.all([pixels(${JSON.stringify(pngA)}), pixels(${JSON.stringify(pngB)})]);
        if (a.width !== b.width || a.height !== b.height) return -1;
        let count = 0;
        for (let i = 0; i < a.data.length; i += 4) {
          if (a.data[i] !== b.data[i] || a.data[i + 1] !== b.data[i + 1] || a.data[i + 2] !== b.data[i + 2]) count++;
        }
        return count;
      })()`;
      const { result, exceptionDetails } = await devTools.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
      if (exceptionDetails) throw new Error(`Comparing screenshots failed: ${exceptionDetails.exception?.description ?? exceptionDetails.text}`);
      return result.value;
    };

    const changed = [];
    for (const motif of selected) {
      // Switching to another window closes hovers and the like, so try again then
      for (let attempt = 1; ; attempt++) {
        await runSteps([
          { op: 'command', id: 'workbench.action.closeQuickOpen' },
          { op: 'command', id: 'notifications.clearAll' },
          { op: 'command', id: 'workbench.action.closeAllEditors' },
          { op: 'command', id: 'workbench.action.terminal.killAll' },
          { op: 'command', id: 'workbench.action.closePanel' },
          // Closing and reopening the side bar, and collapsing the explorer, lay both out
          // the same way for every motif, whichever motifs came before
          { op: 'command', id: 'workbench.action.closeSidebar' },
          { op: 'command', id: 'workbench.view.explorer' },
          { op: 'command', id: 'workbench.files.action.collapseExplorerFolders' },
          ...(motif.sidebar ? [] : [{ op: 'command', id: 'workbench.action.closeSidebar' }]),
          { op: 'wait', ms: 500 },
        ]);
        await runSteps(motif.steps);
        await sleep(2000);
        if (await isShown(['.part.titlebar.inactive'])) throw new Error('VS Code drew its window as inactive');
        if (await isShown(motif.expect)) break;
        if (attempt === 3) throw new Error(`${motif.name}: ${motif.expect.join(', ')} not on screen after ${attempt} attempts`);
        console.log(`🔁 ${motif.name}: ${motif.expect.join(', ')} not on screen, trying again`);
        await runSteps(motif.cleanup);
      }

      const { data } = await devTools.send('Page.captureScreenshot', { format: 'png' });
      const file = path.join(outDir, `${motif.name}.png`);
      const difference = fs.existsSync(file) ? await differingPixels(fs.readFileSync(file).toString('base64'), data) : -1;
      if (difference >= 0 && difference <= NOISE_PIXELS) {
        console.log(`✅ ${motif.name}.png unchanged`);
      } else {
        fs.writeFileSync(file, Buffer.from(data, 'base64'));
        changed.push(file);
        console.log(`📸 ${motif.name}.png`);
      }

      await runSteps(motif.cleanup);
    }

    devTools.close();

    if (changed.length) {
      console.log(`🗜  Compressing ${changed.length} screenshots with oxipng`);
      run('oxipng', ['--quiet', '--opt', '4', '--strip', 'safe', ...changed]);
    }
  } finally {
    if (vscode && vscode.exitCode === null) {
      const exited = new Promise(resolve => vscode.once('exit', resolve));
      vscode.kill();
      await Promise.race([exited, sleep(10000)]);
    }
    if (keep) console.log(`🗃  Kept ${temp}`);
    // VS Code's helper processes can still write to the profile for a moment
    else fs.rmSync(temp, { recursive: true, force: true, maxRetries: 10, retryDelay: 500 });
  }
};

main().catch((error) => {
  console.error(`💥 ${error.message}`);
  if (error.stderr) console.error(error.stderr);
  process.exitCode = 1;
});
