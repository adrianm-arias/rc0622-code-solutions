const fs = require('fs');
const data = require('./data.json');
const operation = process.argv[2];
const entryId = data.nextId;

if (operation === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
} else if (operation === 'add') {
  const entryText = process.argv[3];
  data.notes[entryId] = entryText;
  data.nextId += 1;
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (operation === 'update') {
  const entryText = process.argv[4];
  const editEntryId = process.argv[3];
  data.notes[editEntryId] = entryText;
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (operation === 'delete') {
  const deleteEntryId = process.argv[3];
  delete data.notes[deleteEntryId];
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else {
  console.log('invalid operation');
}
