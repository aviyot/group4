const express = require("express");
const cors = require("cors");
const songs = require("./songs");

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.get("/songs", (req, res, next) => {
  const sortQuery = req.query.sort;
  if (req.query.sort) {
    const sortData = songs.songs.sort(function(a, b) {
      return a.sortQuery - b.sortQuery;
    });
    res.send(sortData);
  } else {
    next();
  }
});

app.get("/songs", (req, res, next) => {
  res.send(songs);
});

app.get("/songs", (req, res, next) => {
  res.send(songs);
});

app.post("/song", (req, res, next) => {
  res.send("post");
});

app.delete("/song", (req, res, next) => {
  res.send("post");
});

app.listen(8000, () => console.log("server is running in port 8000"));

// Array
// [ 1,2,3 ]
// Object
// { key1: "val1", key2: "val2" }
/*
let obj = {
    key1: [
        {subkey1: "", subkey: ""},
        {subkey2: "", subkey: ""},
        {subkey3: "", subkey: ""},
    ]
}
*/
