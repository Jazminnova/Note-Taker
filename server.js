//Imports
const express = require("express");
const path = require("path");
const api = require();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Middleware
app.use(express.static("public"));

//
app.use("/api", api);

//Get route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

// get route for homepage
res.get("index", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

//Listener
app.listen(PORT, function () {
  console.log("App listening on http://localhost:${PORT}");
});
