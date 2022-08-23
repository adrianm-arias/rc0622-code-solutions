const fs = require('fs');
const argv = process.argv[2];

fs.readFile(argv, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
