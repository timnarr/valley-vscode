import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const nunjucks = (type) => {
  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

  const nunjucksSyntax = [
    {
      "name": "Tag Punctuation",
      "scope": "entity.tag.tagbraces.nunjucks",
      "settings": {
        "foreground": color.syntax.darkSkyBlue
      }
    },
  ];

  return nunjucksSyntax;
};


export default nunjucks;
