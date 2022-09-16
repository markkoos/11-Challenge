const express = require(`express`);

// Import modular router for notes.js
const notesRouter = require(`./notes`);

const app = express();

// execute the modular router in express
app.use(`/notes`, notesRouter);

module.exports = app;