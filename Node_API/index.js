const express = require("express");
const path = require("path");
const config = require("./config")

const PORT = config.port;

const app = express();
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

app.use("/", express.static("./public"));

const HttpController = require("./controller/HttpController");
new HttpController(app);
