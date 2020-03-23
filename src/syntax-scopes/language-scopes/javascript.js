import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const javascript = (type) => {
  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

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

  return javascriptSyntax;
}

export default javascript;
