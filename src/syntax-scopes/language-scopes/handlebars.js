import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const handlebars = (type) => {
  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

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

  return handlebarsSyntax;
}

export default handlebars;
