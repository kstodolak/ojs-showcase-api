const fs = require('fs');
const path = require('path');

const saveNotes = (notes) => {
  const jsonPath = path.resolve(__dirname, '..', '..', 'db', 'notes.json');
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(jsonPath, dataJSON)
}

module.exports = saveNotes;