/**
 * Test the contrast of the main color combinations: the syntax colors on the
 * editor, and text on the workbench surfaces as VS Code combines them
 */

import contrast from 'get-contrast';
import color from '../src/color.js';
import editorColor from '../src/editorColor.js';

// WCAG AA ratio for normal text, and the lowest ratio this test accepts
const AA_RATIO = 4.5;
const MIN_RATIO = 3;

const ui = editorColor.colors;

const themeColor = (key) => {
  if (!ui[key]) throw new Error(`Unknown theme color: ${key}`);
  return ui[key];
};

// Blend a #RRGGBBAA color onto an opaque background, as VS Code renders it
const onto = (foreground, background) => {
  if (foreground.length !== 9) return foreground;
  const alpha = parseInt(foreground.slice(7), 16) / 255;
  const channels = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  const [fg, bg] = [channels(foreground), channels(background)];
  return '#' + fg.map((value, i) => Math.round(value * alpha + bg[i] * (1 - alpha)).toString(16).padStart(2, '0')).join('');
};

const syntaxPairs = Object.entries(color.syntax)
  .map(([name, value]) => [`Syntax - ${name}`, value, themeColor('editor.background')]);

// [foreground, background], or [foreground, [translucent background, the surface below it]].
// Deliberately dim and not checked: line numbers and the title of inactive windows.
const uiPairs = [
  ['sideBar.foreground', 'sideBar.background'],
  ['descriptionForeground', 'sideBar.background'],
  ['gitDecoration.addedResourceForeground', 'sideBar.background'],
  ['gitDecoration.modifiedResourceForeground', 'sideBar.background'],
  ['gitDecoration.deletedResourceForeground', 'sideBar.background'],
  ['gitDecoration.untrackedResourceForeground', 'sideBar.background'],
  ['gitDecoration.ignoredResourceForeground', 'sideBar.background'],
  ['gitDecoration.conflictingResourceForeground', 'sideBar.background'],
  ['gitDecoration.submoduleResourceForeground', 'sideBar.background'],
  ['editorGutter.addedBackground', 'editorGutter.background'],
  ['editorGutter.modifiedBackground', 'editorGutter.background'],
  ['editorGutter.deletedBackground', 'editorGutter.background'],
  ['tab.inactiveForeground', 'tab.inactiveBackground'],
  ['breadcrumb.foreground', 'breadcrumb.background'],
  ['input.placeholderForeground', 'input.background'],
  ['textLink.foreground', 'editor.background'],
  ['editorInlayHint.foreground', ['editorInlayHint.background', 'editor.background']],
  ['editorSuggestWidget.foreground', 'editorSuggestWidget.background'],
  ['editorSuggestWidgetStatus.foreground', 'editorSuggestWidget.background'],
  ['editorHoverWidget.foreground', 'editorHoverWidget.background'],
  ['scmGraph.historyItemHoverAdditionsForeground', 'editorHoverWidget.background'],
  ['scmGraph.historyItemHoverDeletionsForeground', 'editorHoverWidget.background'],
  ['pickerGroup.foreground', 'quickInput.background'],
  ['notifications.foreground', 'notifications.background'],
  ['statusBar.foreground', 'statusBar.background'],
  ['statusBar.debuggingForeground', 'statusBar.debuggingBackground'],
  ['statusBarItem.remoteForeground', 'statusBarItem.remoteBackground'],
  ['statusBarItem.errorForeground', 'statusBarItem.errorBackground'],
  ['statusBarItem.warningForeground', 'statusBarItem.warningBackground'],
  ['badge.foreground', 'badge.background'],
  ['activityBarBadge.foreground', 'activityBarBadge.background'],
  ['activityWarningBadge.foreground', 'activityWarningBadge.background'],
  ['activityErrorBadge.foreground', 'activityErrorBadge.background'],
  ['button.foreground', 'button.background'],
  ['button.secondaryForeground', 'button.secondaryBackground'],
  ['inputValidation.errorForeground', 'inputValidation.errorBackground'],
].map(([foreground, background]) => {
  const [surface, below] = [].concat(background);
  const backgroundColor = below ? onto(themeColor(surface), themeColor(below)) : themeColor(surface);
  return [`${foreground} on ${surface}`, themeColor(foreground), backgroundColor];
});

const results = [...syntaxPairs, ...uiPairs].map(([name, foreground, background]) => {
  const ratio = contrast.ratio(onto(foreground, background), background);
  const icon = ratio >= AA_RATIO ? '✅' : ratio >= MIN_RATIO ? '🚨' : '💩';
  console.log(`${icon} ${ratio.toFixed(2).padStart(5)}  ${name} (${foreground} on ${background})`);
  return { name, ratio };
});

const failed = results.filter(result => result.ratio < MIN_RATIO);

if (failed.length > 0) {
  console.error(`💩 Below ${MIN_RATIO}:1: ${failed.map(result => result.name).join(', ')}`);
  process.exitCode = 1;
}
