const argv = process.argv.slice(2);
const fs = require('fs');

for (const arg of argv) {
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
