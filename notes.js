const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body, timing) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
      timing: timing,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!!!!"));
  } else {
    console.log(chalk.red.inverse("Note with same title exists!!!!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const findNotes = notes.filter((note) => note.title !== title);

  if (findNotes.length !== notes.length) {
    console.log(chalk.green.inverse("Note Removed!!!!"));
    saveNotes(findNotes);
  } else {
    console.log(chalk.red.inverse("Note with given title doesn't exist!!!!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.inverse("YOUR NOTES -----"));

  notes.forEach((note) => {
    console.log(chalk.yellow.inverse(note.title));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();

  const searchNote = notes.find((note) => note.title === title);

  if (searchNote) {
    console.log(chalk.green.inverse("Title : " + searchNote.title));
    console.log(chalk.inverse("Body : " + searchNote.body));
  } else {
    console.log(chalk.red.inverse("No Note Found!!!!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (errorIn) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
