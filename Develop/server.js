const express = require(`express`);
const path = require(`path`);
const api = require(`./public`)


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware that parses JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use()

app.use(express.static(`public`));

// GET Route for homepage
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
});

// GET Route for notes page
app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/notes.html`))
});

// Wildcard Route 
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
});

// Listening for PORT
app.listen(PORT, () => {
    console.log(`App listening at https://localhost:${PORT} 🚀`)
});