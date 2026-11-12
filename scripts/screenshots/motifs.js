// The screenshots in screenshots/, in the order they are taken.
// Each motif starts from an empty editor area with the panel closed.
// `expect` lists what must be on screen; otherwise the motif is set up again.
// Lines and columns are 1-based, `top` is the line scrolled to the top.
// Language servers are asked first (waitFor…), so the cursor is set once they answer.

import fs from 'fs';
import path from 'path';

// Changes to the copy of the repository after its first commit,
// so the Git motifs and the explorer have something to show
export const prepareWorkspace = (workspace) => {
  const edit = (file, from, to) => {
    const target = path.join(workspace, file);
    const text = fs.readFileSync(target, 'utf8');
    if (!text.includes(from)) throw new Error(`${file} no longer contains ${JSON.stringify(from)}`);
    fs.writeFileSync(target, text.replace(from, to));
  };

  // A changed value, a new property and a missing colon for "Peek Error in JSON"
  edit('demo/json.json', '"age": 27,', '"age" 28,\n  "nickname": "Johnny",');
  edit('demo/json.json', '"city": "New York",', '"city": "Boston",');

  // A changed, an added and a removed line for "Peek Git Changes in Markdown"
  edit('demo/markdown.md', '_single underscores_', '_single underscores, side by side_');
  edit('demo/markdown.md', '**double asterisks**\n', '**double asterisks**\n\n***triple asterisks***\n');
  edit('demo/markdown.md', '~~Strikethrough~~\n\n', '');
};

export default [
  {
    name: 'valley-vscode-title',
    expect: ['.monaco-hover'],
    sidebar: true,
    steps: [
      { op: 'open', file: 'demo/html.html' },
      { op: 'waitForHover', file: 'demo/scss.scss', line: 110, column: 12 },
      { op: 'open', file: 'demo/scss.scss', line: 110, column: 12, top: 104 },
      { op: 'command', id: 'editor.action.showHover' },
    ],
  },
  {
    name: 'valley-vscode-syntax-javascript',
    expect: ['.monaco-hover'],
    steps: [
      { op: 'waitForHover', file: 'demo/javascript.js', line: 28, column: 22 },
      { op: 'open', file: 'demo/javascript.js', line: 28, column: 22, top: 10 },
      { op: 'waitForSemanticTokens', file: 'demo/javascript.js' },
      { op: 'command', id: 'editor.action.showHover' },
    ],
  },
  {
    name: 'valley-vscode-syntax-javascript-2',
    steps: [
      { op: 'open', file: 'demo/javascript.js', line: 63, top: 63 },
      { op: 'waitForSemanticTokens', file: 'demo/javascript.js' },
    ],
  },
  {
    name: 'valley-vscode-syntax-html',
    steps: [{ op: 'open', file: 'demo/html.html', line: 27, top: 27 }],
  },
  {
    name: 'valley-vscode-syntax-css',
    steps: [{ op: 'open', file: 'demo/css.css', line: 50, top: 50 }],
  },
  {
    name: 'valley-vscode-syntax-vue',
    steps: [
      { op: 'open', file: 'demo/vue.js', line: 57, top: 57 },
      { op: 'waitForSemanticTokens', file: 'demo/vue.js' },
    ],
  },
  {
    name: 'valley-vscode-syntax-react',
    steps: [
      { op: 'open', file: 'demo/react.jsx', line: 12, top: 12 },
      { op: 'waitForSemanticTokens', file: 'demo/react.jsx' },
    ],
  },
  {
    name: 'valley-vscode-editor-search',
    expect: ['.search-editor'],
    steps: [
      // Only demo/, so the results don't change with every changelog entry
      { op: 'command', id: 'search.action.openNewEditor', args: [{ query: 'meta', filesToInclude: 'demo', triggerSearch: true, focusResults: false }] },
      { op: 'wait', ms: 2500 },
    ],
    // A search editor is untitled; reverting it closes it without a save prompt
    cleanup: [{ op: 'command', id: 'workbench.action.revertAndCloseActiveEditor' }],
  },
  {
    name: 'valley-vscode-editor-surfaces-commands',
    expect: ['.quick-input-widget', '.notification-toast'],
    sidebar: true,
    steps: [
      // No commit hashes: they change with every commit of this repository
      { op: 'terminal', commands: ['git status --short', 'git diff --stat'] },
      // The workspace has no remote, so the Git extension shows a real error notification
      { op: 'waitForGit' },
      { op: 'command', id: 'git.pull' },
      { op: 'open', file: 'demo/html.html', line: 5 },
      { op: 'wait', ms: 1000 },
      { op: 'command', id: 'workbench.action.quickOpen', args: ['>de'] },
    ],
  },
  {
    name: 'valley-vscode-editor-zen-mode-syntax-php',
    steps: [
      { op: 'open', file: 'demo/php.php', line: 20, top: 16 },
      { op: 'command', id: 'workbench.action.toggleZenMode' },
      { op: 'wait', ms: 1500 },
    ],
    cleanup: [{ op: 'command', id: 'workbench.action.exitZenMode' }],
  },
  {
    name: 'valley-vscode-peek-view-definitions',
    expect: ['.peekview-widget'],
    steps: [
      { op: 'waitForDefinition', file: 'demo/javascript.js', line: 38, column: 15 },
      { op: 'open', file: 'demo/javascript.js', line: 38, column: 15, top: 30 },
      { op: 'waitForSemanticTokens', file: 'demo/javascript.js' },
      // Let the word highlight arrive before the peek view takes the focus
      { op: 'wait', ms: 1500 },
      { op: 'command', id: 'editor.action.peekDefinition' },
    ],
  },
  {
    name: 'valley-vscode-peek-view-git-changes',
    expect: ['.dirty-diff'],
    steps: [
      { op: 'waitForGit' },
      { op: 'open', file: 'demo/markdown.md', line: 26, top: 21 },
      { op: 'wait', ms: 1500 },
      { op: 'command', id: 'editor.action.dirtydiff.next' },
    ],
  },
  {
    name: 'valley-vscode-terminal-full',
    expect: ['.xterm'],
    steps: [
      { op: 'terminal', commands: ['bash test/ansicolor.shell', 'git status --short'] },
      { op: 'command', id: 'workbench.action.toggleMaximizedPanel' },
      { op: 'wait', ms: 1500 },
    ],
    cleanup: [{ op: 'command', id: 'workbench.action.toggleMaximizedPanel' }],
  },
  {
    name: 'valley-vscode-terminal-colors',
    expect: ['.xterm'],
    steps: [
      { op: 'open', file: 'src/editorColor.js', line: 599, top: 593 },
      { op: 'terminal', commands: ['bash test/ansicolor.shell'] },
    ],
  },
  // The JSON motifs come last: VS Code keeps the problems of demo/json.json for a
  // while after closing it, and they would show up in the motifs after them
  {
    name: 'valley-vscode-peek-view-error',
    expect: ['.marker-widget'],
    steps: [
      { op: 'open', file: 'demo/json.json', line: 4, top: 1 },
      { op: 'waitForDiagnostics', file: 'demo/json.json' },
      { op: 'command', id: 'editor.action.marker.next' },
    ],
  },
  {
    name: 'valley-vscode-editor-git-diff',
    expect: ['.monaco-diff-editor'],
    steps: [
      { op: 'waitForGit' },
      { op: 'diff', file: 'demo/json.json' },
      { op: 'wait', ms: 2000 },
    ],
  },
];
