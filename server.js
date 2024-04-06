const express = require('express');
const fs = require('fs');
// Node.js module path can be used to manipulate file paths
const path = require('path');
// Universally Unique Identifier: 32 character string
const uuid = require('../helpers/uuid');

// Function provided by the Express.js framework. When called, it returns a new Express application object.
const app = express();
// Variable named PORT, provides access using process.env in port 3001 which is a defaulted empty port
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data. express.static serves static files from a specified directory, in this case 'public'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html')));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'notes.html')));

// GET Route for API endpoint
app.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      let notes = JSON.parse(data) || [];
      if (notes.length === 0) {
        // If no notes are saved, send a custom response
        return res.json({ message: '' });
      }
      return res.json(notes);
    } catch (pareseError) {
      console.log(parseError);
      res.status(500).send('Error parsing JSON data');
    }
  });
});

// POST Route for notes page
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  // Generate unique ID using UUID
  newNote.id = uuid();
  console.log(newNote);
  fs.readFile
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    let notes = JSON.parse(data) || [];
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      console.log('Note saved successfully!');
      res.sendStatus(200);
    });
  });
});

// DELETE Route for notes page
app.delete('/api/notes/:id', (req, res) => {
  const idToDelete = req.params.id;
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    let notes = JSON.parse(data) || [];
    const updatedNotes = notes.filter(note => note.id !== idToDelete);
    fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(updatedNotes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      console.log(`Note with id ${idToDelete} deleted successfully!`);
      res.sendStatus(200);
    });
  });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// GET : retrieve data
// POST: submit data
// PUT: update data
// DELETE: remove data