const fs = require('fs');

const readFile = process.argv[2];

const writeFile = process.argv[3];

fs.readFile(readFile, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  fs.writeFile(writeFile, data + '\n', err => {
    if (err) {
      console.error(err);
    }
  });
});
