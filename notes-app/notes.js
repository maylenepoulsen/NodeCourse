const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.hex("#3CB371")("Note added"));
  } else {
    console.log(chalk.hex("#e01ceb")("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note successfully removed."));
  } else {
    console.log(chalk.red.inverse("Could not find that note to delete."));
  }
};

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.hex('#42eff5').inverse('Your notes'))
  notes.forEach((note) => console.log(chalk.hex('#42eff5')(note.title)))
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if(note) {
    console.log(chalk.blue(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red('Note was not found'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
