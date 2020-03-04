import color from '../../color';

const handlebarsSyntax = [
  {
    "scope": [
      "meta.function.block.end.handlebars support.constant.handlebars",
      "meta.function.block.start.handlebars support.constant.handlebars",
      "meta.function.inline.else.handlebars support.constant.handlebars",
      "meta.function.inline.other.handlebars support.constant.handlebars",
    ],
    "settings": {
      "foreground": color.syntax.darkSkyBlue
    }
  },
  {
    "scope": "variable.parameter.handlebars",
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
];

export default handlebarsSyntax;
