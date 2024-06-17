const fs = require("fs");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note Title ---",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Information ---",
      demandOption: true,
      type: "string",
    },
    timing: {
      describe: "Time of Note ---",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    notes.addNote(argv.title, argv.body, argv.timing);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Title of Notes to be removed ....",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all note!!");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!!");
  },
});

// console.log(yargs.argv); OR CAN DO
yargs.parse();
