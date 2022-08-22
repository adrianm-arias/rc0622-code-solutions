const express = require('express');
const app = express();

let nextId = 1;
const grades = {};
const newArray = [];
app.get('/api/grades', (req, res) => {
  for (const prop in grades) {
    newArray.push(grades[prop]);
  }
  res.json(newArray);
})

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  nextId++;
  newArray.push(newGrade);
  res.status(201).json(newGrade);
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
})
