const fs = require('fs');
const express = require('express');
const path = require('path');

const { json } = require('express');
// const api = require('./routes/index.js');


// Links db.json database
// const db = require('./db/db.json');

// Function provided by the Express.js framework. When called, it returns a new Express application object.
const app = express();

// Variable named PORT, provides access using process.env in port 3001 which is a defaulted empty port
const PORT = process.env.port || 3000;





// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Not needed
// app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/api/notes', (req, res) => {

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.json(data)
  });
});



// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html')));

// // GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html')));

// // GET Route for API endpoint
// app.get('/api/notes', (req, res) => {
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     data = JSON.parse(data);
//     res.json(data);
//   });
// });





// Break



app.post('/api/notes', (req, res) => {
  //   readfile, get file, adjust content, 
   
  const newNote = req.body;
  console.log(newNote);
  
  fs.readFile('./db/db.json',(err,data) => {
      if(err) throw err;
  
  })
  
  const noteString = JSON.stringify(newNote)
  
  
    fs.writeFile("./db/db.json", noteString, (err) => {
        err ? console.error(err) : console.log('success!')
    })
  
  
   ;
  }); 
  
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
  
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));





// GET Route for feedback page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
// );


//  Read from db.json, display on front end
// db.json is our database, it is an array full of objects, import right into server const ___ = require('');
// Write all requests in server.js, indesx.js is not necessary


// The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).