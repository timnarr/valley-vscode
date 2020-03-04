import color from '../../color';

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
  {
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
];

export default twigSyntax;
