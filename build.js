import fs from 'fs';
import themes from './src/themes.js';

const HEX_COLOR = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

// A broken reference such as color.editor.surface.depth9 would otherwise slip
// through: JSON.stringify drops undefined values, and undefined + alpha becomes "undefined80"
const invalidColors = (theme) => [
  ...Object.entries(theme.colors),
  ...theme.tokenColors
    .filter(rule => 'foreground' in rule.settings)
    .map(rule => [`tokenColors "${rule.name ?? [].concat(rule.scope)[0]}"`, rule.settings.foreground]),
].filter(([, value]) => !HEX_COLOR.test(value));

// VS Code ignores a rule without a scope, while other tools reading the theme
// apply it to all text, so a lost scope would go unnoticed in VS Code
const rulesWithoutScope = (theme) => theme.tokenColors
  .filter(rule => [].concat(rule.scope ?? []).length === 0)
  .map(rule => `tokenColors rule without a scope: ${JSON.stringify(rule)}`);

const invalid = themes.flatMap(item => [
  ...invalidColors(item.theme).map(([key, value]) => `${key} = ${value}`),
  ...rulesWithoutScope(item.theme),
].map(problem => `${item.id}: ${problem}`));

if (invalid.length > 0) {
  console.log('💥 Invalid theme, no files were written:');
  invalid.forEach(line => console.log(`   ${line}`));
  process.exit(1);
}

themes.forEach(item => {
  const jsonObject = JSON.stringify(item.theme, null, 2);

  fs.writeFile(`themes/${item.id}.json`, jsonObject, 'utf8', (err) => {
    if (err) {
      console.log(`💥 An error occured while writing JSON Object to File: ${item.id}.json`);
      console.log(err);
      process.exitCode = 1;
      return;
    }

    console.log(`🚀 JSON file has been saved: ${item.id}.json`);
  });

});
