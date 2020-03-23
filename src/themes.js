import editorColor from './editorColor';
import syntaxColor from './syntaxColor';

const themes = [
  {
    "id": "valley_dark",
    "theme": {
      "name": "Valley Dark",
      "type": "dark",
      ...editorColor('dark'),
      ...syntaxColor('dark')
    }
  },
  {
    "id": "valley_light",
    "theme": {
      "name": "Valley Light",
      "type": "light",
      ...editorColor('light'),
      ...syntaxColor('light')
    }
  },
];

export default themes;
