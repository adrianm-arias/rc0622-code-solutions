const fs = require('fs');

const randomNum = Math.random();
const numToString = randomNum.toString(2);
const finalWord = numToString + '\n';

fs.writeFile('random.txt', finalWord, { encoding: 'utf8', flag: 'a' }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
