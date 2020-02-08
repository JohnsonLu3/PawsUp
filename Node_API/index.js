const http = require("http")
const fs = require("fs")
const path = require("path")
const EventEmitter = require("events")
const Petfrinder = require("./Petfinder")
const PORT = process.env.PORT || 5000
const API_KEY = process.env.API_PETFINDER

let writeContentEmitter = new EventEmitter();

const petFinder = new Petfrinder(API_KEY);
petFinder.getPets();

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        getIndex(req, res)
    }
});
server.listen(PORT, () => { console.log("listing on port", PORT) })

getIndex = (req, res) =>{
    fs.readFile(
        path.join(__dirname, "public", "index.html"),
        (err, content) => {
            if (err) throw err;
            writeContent(req, res,content)
        }
    )
}

writeContent = (req, res, content) => {
    res.writeHead(
        200,
        { "Content-Type": "text/html" }
    );
    res.end(content)
}