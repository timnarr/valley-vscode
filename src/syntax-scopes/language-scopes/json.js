import color from '../../color';

const jsonSyntax = [
  {
    "name": "Property Name Punctuation",
    "scope": [
      "punctuation.support.type.property-name.begin.json",
      "punctuation.support.type.property-name.end.json",
      "support.type.property-name.json",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "name": "String Punctuation",
    "scope": [
      "punctuation.definition.string.begin.json",
      "punctuation.definition.string.end.json",
      "punctuation.definition.string.json",
    ],
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "name": "Array Punctuation",
    "scope": [
      "punctuation.definition.array.begin.json",
      "punctuation.definition.array.end.json",
    ],
    "settings": {
      "foreground": color.syntax.tintedGray
    }
  },
];

export default jsonSyntax;
