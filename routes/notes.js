const notes = require(`express`).Router();
const {fileRead, fileWrite, fileAppend} = require(`../helpers/fsUltils`);
const { v4: uuidv4 } = require('uuid');

// GET Route for diplaying db.json contents
notes.get(`/`, (req, res) => {
    fileRead(`./db/db.json`).then((data) => {
        res.json(JSON.parse(data));
    })
});

// POST Route for adding a new note to db.json
notes.post(`/`, (req, res) => {
    // creates constants for the title and text of the request's body
    const {title, text} = req.body;

    // constant for note including generated ID
    const newNote = {
        title,
        text,
        id: uuidv4(), 
    };

    // Appends the newly created note to the database
    fileAppend(newNote, `./db/db.json`);
    
    
    const success = {
        status: `POSTed successfully!`,
        body: newNote,
    };

    // displays that the post was successful
    res.json(success);

}); 

module.exports = notes;

