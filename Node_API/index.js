const express = require('express');

const PORT = process.env.PORT || 5000

const Petfinder = require("./controller/PetfinderController");
let pf = new Petfinder();
const app = express();
app.listen(PORT, ()=>{
    console.log(`Server listening on Port ${PORT}`)
})
 