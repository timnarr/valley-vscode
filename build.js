import fs from 'fs';
import themes from './src/themes.js';

themes.forEach(item => {
  const jsonObject = JSON.stringify(item.theme, null, 2);

  fs.writeFile(`themes/${item.id}.json`, jsonObject, 'utf8', (err) => {
    if (err) {
      console.log(`💥 An error occured while writing JSON Object to File: ${item.id}.json`);
      return console.log(err);
    }

    console.log(`🚀 JSON file has been saved: ${item.id}.json`);
  });

});
