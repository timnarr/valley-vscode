import base from './syntax-scopes/base';
import css from './syntax-scopes/language-scopes/css';
import handlebars from './syntax-scopes/language-scopes/handlebars';
import html from './syntax-scopes/language-scopes/html';
import javascript from './syntax-scopes/language-scopes/javascript';
import json from './syntax-scopes/language-scopes/json';
import markdown from './syntax-scopes/language-scopes/markdown';
import nunjucks from './syntax-scopes/language-scopes/nunjucks';
import twig from './syntax-scopes/language-scopes/twig';
import xml from './syntax-scopes/language-scopes/xml';

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

