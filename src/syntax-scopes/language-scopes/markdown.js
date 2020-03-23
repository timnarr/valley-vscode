import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const markdown = (type) => {
  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

  const markdownSyntax = [
    {
      "name": "Markdown Heading",
      "scope": "markup.heading.markdown",
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
    {
      "name": "Markdown Heading Punctuation",
      "scope": [
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
        "punctuation.definition.heading.markdown",
      ],
      "settings": {
        "foreground": color.syntax.turquoiseBlue + color.alpha60
      }
    },
    {
      "name": "Markdown Quote",
      "scope": "markup.quote.markdown",
      "settings": {
        "foreground": color.syntax.wisteria
      }
    },
    {
      "name": "Markdown Quote Punctuation",
      "scope": "punctuation.definition.quote.begin.markdown",
      "settings": {
        "fontStyle": "",
        "foreground": color.syntax.wisteria + color.alpha60
      }
    },
    {
      "name": "Markdown List",
      "scope": [
        "markup.list.markdown",
        "markup.list.numbered.markdown",
        "markup.list.unnumbered.markdown",
      ],
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
    {
      "name": "Markdown List Punctuation",
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": color.syntax.pinkish + color.alpha60
      }
    },
    {
      "name": "Markdown Bold",
      "scope": "markup.bold.markdown",
      "settings": {
        "foreground": color.syntax.sand
      }
    },
    {
      "name": "Markdown Bold Punctuation",
      "scope": "punctuation.definition.bold.markdown",
      "settings": {
        "foreground": color.syntax.sand + color.alpha60
      }
    },
    {
      "name": "Markdown Emphasis",
      "scope": "markup.italic.markdown",
      "settings": {
        "foreground": color.syntax.pinkishTan
      }
    },
    {
      "name": "Markdown Emphasis Punctuation",
      "scope": "punctuation.definition.italic.markdown",
      "settings": {
        "fontStyle": "",
        "foreground": color.syntax.pinkishTan + color.alpha60
      }
    },
    {
      "name": "Markdown Link/Image Title/Description",
      "scope": "string.other.link.title.markdown, string.other.link.description.markdown",
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
    {
      "name": "Markdown Link/Image Title/Description Punctuation",
      "scope": [
        "meta.image.inline.markdown punctuation.definition.string.begin.markdown",
        "meta.image.inline.markdown punctuation.definition.string.end.markdown",
        "meta.image.reference.markdown punctuation.definition.string.begin.markdown",
        "meta.image.reference.markdown punctuation.definition.string.end.markdown",
        "meta.link.inline.markdown punctuation.definition.string.begin.markdown",
        "meta.link.inline.markdown punctuation.definition.string.end.markdown",
      ],
      "settings": {
        "foreground": color.syntax.pinkish + color.alpha60
      }
    },
    {
      "name": "Markdown Link/Image Title Text",
      "scope": [
        "string.other.link.description.title.markdown"
      ],
      "settings": {
        "foreground": color.syntax.pinkishTan
      }
    },
    {
      "name": "Markdown Link/Image Title Text Punctuation",
      "scope": [
        "string.other.link.description.title.markdown punctuation.definition.string.begin.markdown",
        "string.other.link.description.title.markdown punctuation.definition.string.end.markdown",
        "string.other.link.description.title.markdown punctuation.definition.string.markdown",
      ],
      "settings": {
        "foreground": color.syntax.pinkishTan + color.alpha60
      }
    },
    {
      "name": "Markdown Link/Image-Reference",
      "scope": [
        "constant.other.reference.link.markdown",
      ],
      "settings": {
        "foreground": color.syntax.wisteria
      }
    },
    {
      "name": "Markdown Link/Image-Reference Punctuation",
      "scope": [
        "meta.link.reference.def.markdown punctuation.separator.key-value.markdown",
        "punctuation.definition.constant.markdown",
      ],
      "settings": {
        "foreground": color.syntax.wisteria + color.alpha60
      }
    },
    {
      "name": "Markdown Underline Link/Image-Src",
      "scope": [
        "markup.underline.link.image.markdown",
        "markup.underline.link.markdown",
      ],
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
    {
      "name": "Markdown Underline Link/Image-Src Punctuation",
      "scope": [
        "meta.image.inline.markdown punctuation.definition.metadata.markdown",
        "meta.link.inline.markdown punctuation.definition.metadata.markdown",
      ],
      "settings": {
        "foreground": color.syntax.turquoiseBlue + color.alpha60
      }
    },
    {
      "name": "Markdown Raw String",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
        "foreground": color.syntax.tea
      }
    },
    {
      "name": "Markdown Raw String Punctuation",
      "scope": "punctuation.definition.raw.markdown",
      "settings": {
        "foreground": color.syntax.tea + color.alpha60
      }
    },
    {
      "name": "Markdown Fenced Code",
      "scope": [
        "markup.fenced_code.block.markdown",
        "markup.raw.block.markdown",
      ],
      "settings": {
        "foreground": color.syntax.tea
      }
    },
    {
      "name": "Markdown Fenced Code Punctuation",
      "scope": [
        "fenced_code.block.language.markdown",
        "markup.fenced_code.block.markdown punctuation.definition.markdown",
      ],
      "settings": {
        "foreground": color.syntax.tea + color.alpha60
      }
    },
    {
      "name": "Markdown Horizontal Rules",
      "scope": "meta.separator.markdown",
      "settings": {
        "foreground": color.syntax.pinkish
      }
    },
  ];

  return markdownSyntax;
}


export default markdown;
