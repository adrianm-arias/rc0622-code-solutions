const express = require('express');
const app = express();
const path = require('path');

// app.use(express.json());

const joinPath = path.join(__dirname, 'public');

console.log('__dirname:', __dirname);
console.log('joinedPath value:', joinPath);

const staticFiles = express.static(joinPath);
app.use(staticFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
