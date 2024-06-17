const fs = require("fs");

const getNotes = function () {
  return "getnotes....";
};

const addNote = function (title, body, timing) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
      timing: timing,
    });

    saveNotes(notes);
    console.log("New Note Added!!!!");
  } else {
    console.log("Note with same title exists!!!!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (errorIn) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  const findNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (findNotes.length !== notes.length) {
    notes.splice(title);
    console.log("Note Removed!!!!");
    saveNotes(findNotes);
  } else {
    console.log("Note with given title doesn't exist!!!!");
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
