//Imports
const express = require("express");
const path = require("path");
const api = require();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Static Middleware
app.use(express.static("public"));

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
