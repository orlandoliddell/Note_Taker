let db = require("./db/db.json")
var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//The following HTML routes should be created:
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

//The following API routes should be created:
app.get("/api/notes", function(req, res) {
    return res.json(db);
});
