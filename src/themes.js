import editorColor from './editorColor';
import syntaxColor from './syntaxColor';

const themes = [
  {
    "id": "valley_dark",
    "theme": {
      "name": "Valley",
      "type": "dark",
      ...editorColor,
      ...syntaxColor
    }
  },
];

export default themes;
