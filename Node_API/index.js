const http = require("http")
const fs = require("fs")
const path = require("path")
const EventEmitter = require("events")
const Petfrinder = require("./Petfinder")
const PORT = process.env.PORT || 5000
const API_KEY = process.env.API_PETFINDER
const express = require('express');

const petFinder = new Petfrinder(API_KEY);
petFinder.getPets();

const PORT = process.env.PORT || 5000

const app = express();
app.listen(PORT, ()=>{
    console.log(`Server listening on Port ${PORT}`)
})


// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         getIndex(req, res)
//     }
// });
// server.listen(PORT, () => { console.log("listing on port", PORT) })