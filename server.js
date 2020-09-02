let db = require("./db/db.json")
var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//The following HTML routes should be created:
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

//The following API routes should be created:
app.get("/api/notes", function(req, res) {
    res.json(db);
});
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    db.push(newNote)
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify([...db]), "utf8", function(err){
        if(err) throw err;
        res.json([db])
    })
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  