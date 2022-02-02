const multer = require('multer');
const fs = require('fs');
const express = require('express');

const readNotes = require('./methods/readNotes.js');
const getNote = require('./methods/getNote.js');
const addNote = require('./methods/addNote.js');
const deleteNote = require('./methods/deleteNote.js');

//express initialization
const app = express();
const port = process.env.PORT || 3001;

app.get('/notes', ({ query }, response) => {
  try {
    const notes = readNotes(query.queryString);
    response.status(200).json(notes);
  } catch (e) {
    response.status(404).json([]);
  }
});

app.post('/notes', multer().none(), ({ body }, response) => {
  if (!body.title || !body.content) {
    response.status(400).send('Wrong data');
    return;
  }
  const result = addNote(body);
  if (!result) {
    response.status(400).send('Note with given title already added');
    return;
  }

  response.status(201).send('Success');
});

app.get('/notes/:title', (request, response) => {
  const { title } = request.params;
  const note = getNote(title);
  if (!note) {
    response.status(404).json({});
  }

  response.status(200).json(note);
});

app.delete('/notes/:title', (request, response) => {
  const { title } = request.params;
  const result = deleteNote(title);

  return result
    ? response.status(200).send('Removed')
    : response.status(404).send('Nothing to remove');
});

//404 pages
app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});