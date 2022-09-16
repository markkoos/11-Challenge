const util = require(`util`);
const fs = require(`fs`);

// turns fs.readFile into a promise
const fileRead = util.promisify(fs.readFile);

// writes given data to the db.json
const fileWrite = (destination, stuff) => {
    fs.writeFile(destination, JSON.stringify(stuff))
}

// appends additional data to the db.json file
const fileAppend = (stuff, file) => {
    fs.readFile(file, `utf8`, (err, data) => {
        if (!err) {
           const parsedStuff = JSON.parse(data);
           parsedStuff += stuff;
           fileWrite(file, parsedStuff); 
        }
    })
};

module.exports = {fileRead, fileWrite, fileAppend};