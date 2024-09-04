const express = require("express");
const fs = require("fs");

const port = process.env.PORT | 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static("public"));

app.get("/api/persons", function (req, res)
{
  res.send(fs.readFileSync("./db.json"));
});

app.post("/api/persons", function (req, res)
{
  if(!req.body) return res.sendStatus(400);
  let person = req.body;
  console.log(person);
  let db = JSON.parse(fs.readFileSync("./db.json"));
  const id = Math.max.apply(Math, db.map(function(u){return u.id;}))
  person.id = id + 1;
  db.push(person);
  fs.writeFileSync("./db.json", JSON.stringify(db));
  res.send(`${person.id} - ${person.name} - ${person.age}`);
});

app.listen(port);
