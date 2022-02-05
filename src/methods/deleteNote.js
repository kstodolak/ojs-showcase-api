const readNotes = require('./readNotes.js');
const saveNotes = require('./saveNotes.js');

const deleteNote = (title) => {
  const notes = readNotes();
  console.log(notes);
  console.log(title);
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    return true;
  } else {
    return false;
  }
}

module.exports = deleteNote;