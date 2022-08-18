const argv = process.argv.slice(2);
const fs = require('fs');

// for (const arg of argv) {
//   fs.readFile(arg, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// }

for (let i = 0; i < argv.length; i++) {
  console.log(argv[i]);
  fs.readFile(argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
