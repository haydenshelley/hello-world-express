var express = require("express");
var app = express();

var things = require("./things.js");
var stuff = require("./stuff.js");

// home directory
// .all similar to rails resources
app.all("/", function (req, res) {
  res.send("Hello World!");
});

// pages
app.use("/things", things);
app.use("/stuff", stuff);

//handle bad requests
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(3000);
