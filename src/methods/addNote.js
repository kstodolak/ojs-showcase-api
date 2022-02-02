const readNotes = require('./readNotes.js');
const saveNotes = require('./saveNotes.js');

const addNote = ({ title, content }) => {
  const notes = readNotes();
  console.log(...notes);
  const isInNotes = notes.find((note) => note.title === title);

  if (!isInNotes) {
    notes.push({
      title,
      content
    });
    saveNotes(notes)
    return true;
  } else {
    return false;
  }
}

module.exports = addNote;