import color from '../color';

const baseSyntax = [
  {
    "name": "Italic",
    "scope": [
      "emphasis",
      "markup.italic",
      "markup.quote",
    ],
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "Bold",
    "scope": "strong",
    "settings": {
      "fontStyle": "bold"
    }
  },
  {
    "name": "Comment",
    "scope": [
      "comment",
      "punctuation.definition.comment",
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": color.syntax.metallicBlue
    }
  },
  {
    "name": "Default Punctuation",
    "scope": [
      "meta.brace",
      "meta.parameters",
      "punctuation.accessor",
      "punctuation.definition.dictionary",
      "punctuation.definition.block",
      "punctuation.definition.section",
      "punctuation.separator.comma",
      "punctuation.separator",
      "punctuation.terminator.statement",
    ],
    "settings": {
      "foreground": color.syntax.tintedGray
    }
  },
  {
    "name": "Tag Punctuation",
    "scope": [
      "punctuation.definition.tag.begin",
      "punctuation.definition.tag.end",
      "punctuation.definition.tag"
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  /**
   * The following scopes are based on/taken from the Dark+ theme
   * https://github.com/microsoft/vscode/blob/master/extensions/theme-defaults/themes/dark_plus.json
   */
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded"
    ],
    "settings": {
      "foreground": color.syntax.silver
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "foreground": color.syntax.lavenderPink
    }
  },
  {
    "scope": [
      "constant.numeric",
      "entity.name.operator.custom-literal.number",
      "keyword.operator.minus.exponent",
      "keyword.operator.plus.exponent",
      "variable.other.enummember",
    ],
    "settings": {
      "foreground": color.syntax.darkSkyBlue
    }
  },
  {
    "scope": "constant.regexp",
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "scope": [
      "entity.name.tag",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "scope": [
      "entity.name.function.preprocessor",
      "meta.preprocessor",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "storage",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "scope": [
      "keyword.operator.noexcept",
      "storage.modifier",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": [
      "entity.name.operator.custom-literal.string",
      "meta.embedded.assembly",
      "string",
    ],
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "string.tag",
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "string.value",
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "name": "String interpolation",
    "scope": [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "scope": [
      "support.type.property-name",
      "support.type.vendored.property-name",
    ],
    "settings": {
      "foreground": color.syntax.silver
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "keyword.control",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "scope": [
      "keyword.operator.alignas",
      "keyword.operator.alignof",
      "keyword.operator.cast",
      "keyword.operator.expression",
      "keyword.operator.instanceof",
      "keyword.operator.logical.python",
      "keyword.operator.new",
      "keyword.operator.sizeof",
      "keyword.operator.typeid",
      "keyword.operator.wordlike",
    ],
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "support.function.git-rebase",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "constant.sha.git-rebase",
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "storage.modifier.package.java",
      "variable.language.wildcard.java",
    ],
    "settings": {
      "foreground": color.syntax.silver
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "name": "Function",
    "scope": [
      "entity.name.function"
    ],
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.operator.custom-literal", // See https://en.cppreference.com/w/cpp/language/user_literal
      "source.powershell variable.other.member",
      "support.constant.handlebars",
      "support.function",
    ],
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "name": "Types declaration and references",
    "scope": [
      "entity.name.class",
      "entity.name.namespace",
      "entity.name.scope-resolution",
      "entity.name.type",
      "entity.other.attribute",
      "meta.return-type",
      "storage.type.annotation.groovy",
      "storage.type.annotation.java",
      "storage.type.boolean.go",
      "storage.type.byte.go",
      "storage.type.cs",
      "storage.type.error.go",
      "storage.type.generic.cs",
      "storage.type.generic.groovy",
      "storage.type.generic.java",
      "storage.type.groovy",
      "storage.type.java",
      "storage.type.modifier.cs",
      "storage.type.numeric.go",
      "storage.type.object.array.groovy",
      "storage.type.object.array.java",
      "storage.type.parameters.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.array.java",
      "storage.type.primitive.groovy",
      "storage.type.primitive.java",
      "storage.type.rune.go",
      "storage.type.string.go",
      "storage.type.token.java",
      "storage.type.uintptr.go",
      "storage.type.variable.cs",
      "support.class",
      "support.type",
    ],
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "name": "Types declaration and references, TS grammar specific",
    "scope": [
      "entity.other.inherited-class",
      "meta.type.cast.expr",
      "meta.type.new.expr",
      "support.constant.dom",
      "support.constant.json",
      "support.constant.math",
    ],
    "settings": {
      "foreground": color.syntax.tea
    }
  },
  {
    "name": "Control flow / Special keywords",
    "scope": [
      "entity.name.operator",
      "keyword.control",
      "keyword.operator.delete",
      "keyword.other.operator",
      "keyword.other.using",
      "source.cpp keyword.operator.new",
    ],
    "settings": {
      "foreground": color.syntax.wisteria
    }
  },
  {
    "name": "Assignment Keyword",
    "scope": [
      "keyword.operator.assignment"
    ],
    "settings": {
      "foreground": color.syntax.silver
    }
  },
  {
    "name": "Variable and parameter name",
    "scope": [
      "entity.name.variable",
      "meta.definition.variable.name",
      "support.variable",
      "variable",
    ],
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "name": "Regular expression groups",
    "scope": [
      "keyword.operator.negation.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.group.regexp",
      "support.other.parenthesis.regexp",
    ],
    "settings": {
      "foreground": color.syntax.sand
    }
  },
  {
    "scope": [
      "constant.character.character-class.regexp",
      "constant.character.set.regexp",
      "constant.other.character-class.regexp",
      "constant.other.character-class.set.regexp",
    ],
    "settings": {
      "foreground": color.syntax.pinkish
    }
  },
  {
    "scope": [
      "keyword.control.anchor.regexp",
      "keyword.operator.or.regexp",
    ],
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "constant.character",
    "settings": {
      "foreground": color.syntax.turquoiseBlue
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": color.syntax.pinkishTan
    }
  },
  {
    "scope": "entity.name.label",
    "settings": {
      "foreground": color.syntax.silver
    }
  }
];

export default baseSyntax;