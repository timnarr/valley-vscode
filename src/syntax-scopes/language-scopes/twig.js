import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const twig = (type, fontstyle) => {

  let color = colorDark;

  if (type === 'light') {
    color = colorLight;
  }

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

  return twigSyntax;
}

export default twig;
