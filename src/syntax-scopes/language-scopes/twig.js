import color from '../../color.js';

const twigSyntax = [
  {
    "scope": "punctuation.section.tag.twig",
    "settings": {
      "foreground": color.syntax.darkSkyBlue
    }
  },
  {
    "scope": [
      "variable.other.property.twig",
      "variable.other.twig",
    ],
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
];

export default twigSyntax;
