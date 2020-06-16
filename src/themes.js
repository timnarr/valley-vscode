import editorColor from './editorColor';
import syntaxColor from './syntaxColor';

const themes = [
  {
    "id": "valley_dark",
    "theme": {
      "name": "Valley Dark",
      "type": "dark",
      "semanticHighlighting": true,
      ...editorColor('dark'),
      ...syntaxColor('dark', 'normal')
    }
  },
  {
    "id": "valley_light",
    "theme": {
      "name": "Valley Light",
      "type": "light",
      "semanticHighlighting": true,
      ...editorColor('light'),
      ...syntaxColor('light', 'normal')
    }
  },
  {
    "id": "valley_dark_italic",
    "theme": {
      "name": "Valley Italic",
      "type": "dark",
      "semanticHighlighting": true,
      ...editorColor('dark'),
      ...syntaxColor('dark', 'italic')
    }
  },
  {
    "id": "valley_light_italic",
    "theme": {
      "name": "Valley Italic",
      "type": "light",
      "semanticHighlighting": true,
      ...editorColor('light'),
      ...syntaxColor('light', 'italic')
    }
  }
];

export default themes;
