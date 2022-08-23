const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

const newArray = [];
app.get('/api/notes', (req, res) => {
  for (const prop in data.notes) {
    newArray.push(data.notes[prop]);
  }
  res.json(newArray);
});

app.get('/api/notes/:id', (req, res) => {
  const viewId = req.params.id;
  const viewEntry = data.notes[viewId];
  const checkNum = Number.parseFloat(viewId);
  if (Number.isInteger(checkNum) !== false && checkNum > 0) {
    if (viewEntry !== undefined) {
      res.json(viewEntry);
    } else {
      res.status(404).json({ error: `cannot find note with id ${viewId}` });
    }
  } else if (Number.isInteger(checkNum) !== false || checkNum < 0 || viewEntry === undefined) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.post('/api/notes', (req, res) => {
  const nextId = data.nextId;
  if (req.body.content) {
    const newContent = {
      id: nextId,
      content: req.body.content
    };
    data.notes[nextId] = newContent;
    data.nextId += 1;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error ocurred'
        });
      } else {
        res.status(201).json(newContent);
      }
    });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  const viewEntry = data.notes[deleteId];
  const checkNum = Number.parseFloat(deleteId);

  if (Number.isInteger(checkNum) !== false && checkNum > 0) {
    if (viewEntry !== undefined) {
      delete data.notes[deleteId];

      const dataJSON = JSON.stringify(data, null, 2);
      fs.writeFile('./data.json', dataJSON, 'utf8', err => {
        if (err) {
          console.error(err);
          res.status(500).json({
            error: 'An unexpected error ocurred'
          });
        } else {
          res.status(204).json({});
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${deleteId}` });
    }
  } else if (Number.isInteger(checkNum) !== false || checkNum <= 0 || viewEntry === undefined) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const editId = req.params.id;
  const checkNum = Number.parseFloat(editId);
  const editEntry = data.notes[editId];

  if (Number.isInteger(checkNum) !== true || checkNum < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (editEntry === undefined) {
    res.status(404).json({ error: `cannot find note with id ${editId}` });
  } else {
    data.notes[editId].content = req.body.content;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error ocurred'
        });
      } else {
        res.status(200).json(data.notes[editId]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
