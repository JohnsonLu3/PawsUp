const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

app.use("/", express.static("./public"));

const HttpController = require("./controller/HttpController");
new HttpController(app);
