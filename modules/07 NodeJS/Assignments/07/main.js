const express = require("express");
const app = express();
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const { promisify } = require("util");

const zip = (source, callback) => {
  try {
    const pathBackup = path.join("backup", `${source}.gz`);
    fs.createReadStream(source) //read the stream
      .pipe(zlib.createGzip()) // zip the file
      .pipe(fs.createWriteStream(pathBackup)) // create the zip file
      .on("finish", () => callback(null, { message: "File was zipped!!!" }));
  } catch (ex) {
    return callback(ex);
  }
};

app.use(express.json()); // Middleware - for reading the BODY

// Read
app.get("/", (request, response) => {
  const init = (async () => {
    const fileName = "students.csv";

    try {
      const promiseZip = promisify(zip);
      const result = await promiseZip(fileName);

      console.log("Result", result.message);
      response.json("Sucsess to backup");
    } catch (ex) {
      console.error("Error", ex);
      response.json("failed to backup");
    }
  })();
});

app.listen(8000, () => console.log("server is running in port 8000"));
