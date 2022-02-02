const path = require('path');
const fs = require('fs');

const readNotes = (query) => {
  try {
    const jsonPath = path.resolve(__dirname, '..', '..', 'db', 'notes.json');
    const dataBuffer = fs.readFileSync(jsonPath);
    const notes = JSON.parse(dataBuffer.toString());
    if (query) {
      const regExp = new RegExp(query, 'mi');
      return notes.filter(note => regExp.test(note.title) || regExp.test(note.content));
    }
    return notes;
  } catch (e) {
    return []
  }
}

module.exports = readNotes;