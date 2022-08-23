const express = require('express');
const app = express();
const data = require('./data.json');

const newArray = [];
app.get('/api/notes', (req, res) => {
  for (const prop in data.notes) {
    newArray.push(data.notes[prop]);
  }
  res.json(newArray);
});

// app.get('/api/notes/:id', (req, res) => {
//   const editId = req.params.id;
//   const viewEntry = data.notes[editId];
//   const checkNum = Number(editId);
//   if (Number.isInteger(checkNum) !== false && checkNum > 0) {
//     if (viewEntry !== undefined) {
//       res.json(viewEntry);
//     } else {
//       res.status(404).json({ error: `cannot find note with id ${editId}` });
//     }
//   } else if (Number.isInteger(checkNum) !== false && checkNum <= 0) {
//     res.status(400).json({ error: 'id must be a positive integer' });
//   }
// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
