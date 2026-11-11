import base from './syntax-scopes/base.js';
import css from './syntax-scopes/language-scopes/css.js';
import handlebars from './syntax-scopes/language-scopes/handlebars.js';
import html from './syntax-scopes/language-scopes/html.js';
import javascript from './syntax-scopes/language-scopes/javascript.js';
import json from './syntax-scopes/language-scopes/json.js';
import markdown from './syntax-scopes/language-scopes/markdown.js';
import nunjucks from './syntax-scopes/language-scopes/nunjucks.js';
import twig from './syntax-scopes/language-scopes/twig.js';
import xml from './syntax-scopes/language-scopes/xml.js';

const syntaxColor = (fontstyle) => {
  const syntaxColor = {
    tokenColors: [
      ...base(fontstyle),
      ...css,
      ...handlebars,
      ...html,
      ...javascript,
      ...json,
      ...markdown,
      ...nunjucks,
      ...twig,
      ...xml,
    ]
  };

  return syntaxColor;
};

export default syntaxColor;

