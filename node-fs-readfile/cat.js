const argv = process.argv.slice(2);
const fs = require('fs');

let counter = 0;
function readAll() {
  if (counter < argv.length) {
    const file = argv[counter];
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(data);
      counter++;
      readAll();
    });
  }
}
readAll();
