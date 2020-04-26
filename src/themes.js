import editorColor from './editorColor';
import syntaxColor from './syntaxColor';

const themes = [
  {
    "id": "valley_dark",
    "theme": {
      "name": "Valley",
      "type": "dark",
      ...editorColor,
      ...syntaxColor('normal')
    }
  },
  {
    "id": "valley_dark_italic",
    "theme": {
      "name": "Valley Italic",
      "type": "dark",
      ...editorColor,
      ...syntaxColor('italic')
    }
  },
];

export default themes;
