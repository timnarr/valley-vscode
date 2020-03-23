import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const css = (type) => {
  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

  const cssSyntax = [
    {
      "name": "Variables",
      "scope": [
        "source.coffee.embedded",
        "variable.css",
        "variable.other.less",
        "variable.scss",
      ],
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
    {
      "name": "SCSS Variable Interpolation",
      "scope": [
        "source.css punctuation.definition.interpolation.begin.bracket.curly",
        "source.css punctuation.definition.interpolation.end.bracket.curly",
      ],
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
    {
      "name": "Punctuation",
      "scope": [
        "source.css meta.at-rule.include.scss",
        "source.css meta.at-rule.mixin.scss",
        "source.css meta.definition.variable.map",
        "source.css punctuation.definition.attribute-selector.begin.bracket.square",
        "source.css punctuation.definition.attribute-selector.end.bracket.square",
        "source.css punctuation.definition.begin.bracket.round",
        "source.css punctuation.definition.condition.begin.bracket.round",
        "source.css punctuation.definition.condition.end.bracket.round",
        "source.css punctuation.definition.end.bracket.round",
        "source.css punctuation.definition.entity.begin.bracket.square",
        "source.css punctuation.definition.entity.end.bracket.square",
        "source.css punctuation.definition.map.begin.bracket.round",
        "source.css punctuation.definition.map.end.bracket.round",
        "source.css punctuation.definition.parameters.begin.bracket.round",
        "source.css punctuation.definition.parameters.end.bracket.round",
        "source.css punctuation.definition.pseudo-class.begin.bracket.round",
        "source.css punctuation.definition.pseudo-class.end.bracket.round",
        "source.css punctuation.section",
        "source.css punctuation.separator",
        "source.css punctuation.terminator",
      ],
      "settings": {
        "foreground": color.syntax.tintedGray
      }
    },
    {
      "name": "CSS Property Name",
      "scope": [
        "support.type.property-name.css",
        "support.type.vendored.property-name.css"
      ],
      "settings": {
        "foreground": color.syntax.silver
      }
    },
    {
      "name": "SCSS Attributes String",
      "scope": "meta.attribute-selector.scss",
      "settings": {
        "foreground": color.syntax.pinkishTan
      }
    },
    {
      "name": "CSS Pseudo Element/Class",
      "scope": [
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css punctuation",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css punctuation",
        "entity.other.attribute-name.pseudo-element.css",
      ],
      "settings": {
        "foreground": color.syntax.sand
      }
    },
    {
      "name": "CSS Element Selector",
      "scope": "entity.name.tag.css",
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
    {
      "name": "CSS ID Selector",
      "scope": [
        "entity.other.attribute-name.id.css punctuation",
        "entity.other.attribute-name.id.css",
        "source.css.less entity.other.attribute-name.id"
      ],
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
    {
      "name": "CSS Class Selector",
      "scope": [
        "entity.other.attribute-name.class.css punctuation",
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css"
      ],
      "settings": {
        "foreground": color.syntax.tea
      }
    },
    {
      "name": "(S)CSS Keyword/Unit",
      "scope": [
        "source.css keyword.other.unit",
        "source.scss keyword.other.unit"
      ],
      "settings": {
        "foreground": color.syntax.lavenderPink
      }
    },
    {
      "name": "Font Names",
      "scope": [
        "support.constant.font-name",
        "support.constant.font-name.css",
        "support.constant.vendored.property-value.css"
      ],
      "settings": {
        "foreground": color.syntax.silver
      }
    },
    {
      "name": "Color Names",
      "scope": [
        "constant.other.color.rgb-value",
        "constant.other.color.rgb-value.hex.css punctuation.definition.constant.css",
        "constant.other.rgb-value",
        "support.constant.color",
        "support.constant.color.w3c-extended-color-name.css",
        "support.constant.color.w3c-standard-color-name.css"
      ],
      "settings": {
        "foreground": color.syntax.wisteria
      }
    },
    {
      "name": "Keyword Other",
      "scope": [
        "source.css keyword.other",
        "source.scss keyword.other"
      ],
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
    {
      "name": "CSS Property Value",
      "scope": [
        "support.constant.media",
        "support.constant.media-type",
        "support.constant.property-value",
      ],
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
    {
      "name": "SassDoc Punctuation",
      "scope": "punctuation.definition.block.tag.sassdoc",
      "settings": {
        "foreground": color.syntax.wisteria
      }
    },
  ];

  return cssSyntax;
}

export default css;
