import color from '../../color';

const htmlSyntax = [
  {
    "name": "Doctype",
    "scope": [
      "entity.name.tag.doctype.html",
      "meta.tag.metadata.doctype.html entity.name.tag.html",
      "meta.tag.metadata.doctype.html entity.other.attribute-name.html",
      "meta.tag.metadata.doctype.html punctuation.definition.tag.begin.html",
      "meta.tag.metadata.doctype.html punctuation.definition.tag.end.html",
      "meta.tag.sgml.doctype.html",
      "meta.tag.sgml.html punctuation.definition.tag.html",
    ],
    "settings": {
      "foreground": color.syntax.sand,
    }
  },
  {
    "name": "Tag Punctuation",
    "scope": [
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "punctuation.definition.tag.html",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "name": "Class Attribute",
    "scope": [
      "meta.attribute-with-value.class.html string",
      "meta.attribute.class.html string",
    ],
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "name": "ID Attribute",
    "scope": [
      "meta.attribute-with-value.id.html string",
      "meta.attribute.id.html string",
    ],
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
];

export default htmlSyntax;
