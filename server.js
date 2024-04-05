const express = require('express');
// Node.js module path can be used to manipulate file paths
const path = require('path');
// Universally Unique Identifier: 32 character string
const uuid = require('../express-note-taker/helpers/uuid')

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
  let notes = JSON.parse(data || '[]');
  if (notes.length === 0) {
    // If no notes are saved, send a custom response
    return res.json({ message '' });
  }
  return res.json(notes);
} catch (pareseError) {
  console.log(parseError);
  res.status(500).send('Error parsing JSON data');
}
  });
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  // Generate unique ID using UUID
  newNote.id = uuid(); 
  console.log(newNote);
  fs.readfile
})


const { json } = require('express');
// const api = require('./routes/index.js');


// Links db.json database
// const db = require('./db/db.json');




// Not needed
// app.use('/api', api);



// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'notes.html')));




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