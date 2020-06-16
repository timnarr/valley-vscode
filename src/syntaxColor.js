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

const syntaxColor = (type, fontstyle) => {
  const syntaxColor = {
    tokenColors: [
      ...base(type, fontstyle),
      ...css(type),
      ...handlebars(type),
      ...html(type),
      ...javascript(type),
      ...json(type),
      ...markdown(type),
      ...nunjucks(type),
      ...twig(type),
      ...xml(type),
    ]
  }

  return syntaxColor;
}

export default syntaxColor;
