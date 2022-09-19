const util = require(`util`);
const fs = require(`fs`);

// turns fs.readFile into a promise to run with asynchronous code
const fileRead = util.promisify(fs.readFile);

// writes given data to the db.json
const fileWrite = (destination, stuff) => {
    fs.writeFile(destination, JSON.stringify(stuff), (error) => 
    error ? console.log(error) : console.info (`Data send to ${destination}`)
)};

// appends additional data to the db.json file
const fileAppend = (stuff, file) => {
    fs.readFile(file, `utf8`, (error, data) => {
        if (!error) {
           const parsedStuff = JSON.parse(data);
           parsedStuff.push(stuff);
           fileWrite(file, parsedStuff); 
        } else {
            console.log(`LOL DIDN'T WORK`)
        }
    })
};

module.exports = {fileRead, fileWrite, fileAppend};