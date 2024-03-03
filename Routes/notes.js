const notesRouter = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("./helpers/fsUtils");
const uuid = require("./helpers/uuid");
