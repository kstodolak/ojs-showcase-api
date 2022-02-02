const fs = require('fs');
const readNotes = require('./readNotes.js');

const getNote = (title) => {
  const notes = readNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    return note;
  } else {
    return null;
  }
}

module.exports = getNote;