const fs = require('fs');

const argv = process.argv[2];
const finalWord = argv + '\n';

fs.writeFile('note.txt', finalWord, { encoding: 'utf8', flag: 'a' }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
