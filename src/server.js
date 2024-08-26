const express = require("express");
const fs = require("fs");

const port = process.env.PORT | 3000;

const app = express();

app.use(express.static("public"));

app.get("/api/persons", function (req, res)
{
  res.send(fs.readFileSync("./db.json"));
});

app.listen(port);
