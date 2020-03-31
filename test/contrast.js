/**
 * Test color contrast of some main color combinations
 */

const contrast = require('get-contrast');
const prettyOutput = require('prettyoutput')
import color from '../src/color';

const check = (colorA, colorB) => {
  const ratio = contrast.ratio(colorA, colorB)
  const wcagScore = contrast.score(colorA, colorB)
  let visualScore;

  if (ratio >= 4.5) {
    visualScore = '✅ passed'
  } else if (ratio >= 3) {
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

console.log(prettyOutput(tests))
