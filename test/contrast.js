/**
 * Test color contrast of some main color combinations
 */

import contrast from 'get-contrast';
import color from '../src/color.js';

// WCAG AA ratio for normal text, and the lowest ratio this test accepts
const AA_RATIO = 4.5;
const MIN_RATIO = 3;

const check = (colorA, colorB) => {
  const ratio = contrast.ratio(colorA, colorB)
  const wcagScore = contrast.score(colorA, colorB)
  let visualScore;

  if (ratio >= AA_RATIO) {
    visualScore = '✅ passed'
  } else if (ratio >= MIN_RATIO) {
    visualScore = '🚨 acceptable'
  } else {
    visualScore = '💩 failed'
  }

  const result = {
    '├── colors': `${colorA}, ${colorB}`,
    '├── score': `[${wcagScore}]`,
    '├── ratio': ratio,
    '└── result': visualScore,
  };

  return result;
};

const tests = [{
    "Name": "Syntax - silver",
    "Result": check(color.syntax.silver, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - tintedGray",
    "Result": check(color.syntax.tintedGray, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - metallicBlue",
    "Result": check(color.syntax.metallicBlue, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - tea",
    "Result": check(color.syntax.tea, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - turquoiseBlue",
    "Result": check(color.syntax.turquoiseBlue, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - darkSkyBlue",
    "Result": check(color.syntax.darkSkyBlue, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - wisteria",
    "Result": check(color.syntax.wisteria, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - lavenderPink",
    "Result": check(color.syntax.lavenderPink, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - pinkish",
    "Result": check(color.syntax.pinkish, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - pinkishTan",
    "Result": check(color.syntax.pinkishTan, color.editor.surface.depth4)
  },
  {
    "Name": "Syntax - sand",
    "Result": check(color.syntax.sand, color.editor.surface.depth4)
  },
];

console.log(tests)

const failed = tests.filter(test => test.Result['├── ratio'] < MIN_RATIO);

if (failed.length > 0) {
  console.error(`💩 Below ${MIN_RATIO}:1: ${failed.map(test => test.Name).join(', ')}`);
  process.exitCode = 1;
}
