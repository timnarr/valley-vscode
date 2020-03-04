import color from '../../color';

const javascriptSyntax = [
  {
    "name": "Object Punctuation",
    "scope": "punctuation.definition.binding-pattern.object.js",
    "settings": {
      "foreground": color.syntax.tintedGray
    }
  },
  {
    "name": "JSDoc Punctuation",
    "scope": "punctuation.definition.block.tag.jsdoc",
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "name": "JSX Tags",
    "scope": "source.js.jsx entity.name.tag.js.jsx support.class",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
];

export default javascriptSyntax;
