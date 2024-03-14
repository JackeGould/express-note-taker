const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');


// Links db.json database
const db = require('./db/db.json');

// Variable named PORT, provides access using process.env in port 3001 which is a defaulted empty port
const PORT = process.env.port || 3001;

// Function provided by the Express.js framework. When called, it returns a new Express application object.
const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Not needed
// app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


//  Read from db.json, display on front end
// db.json is our database, it is an array full of objects, import right into server const ___ = require('');
// Write all requests in server.js, indesx.js is not necessary