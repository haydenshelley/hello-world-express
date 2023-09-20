var express = require("express");
var app = express();

var things = require("./things.js");
var stuff = require("./stuff.js");

// home directory
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// pages
app.use("/things", things);
app.use("/stuff", stuff);

app.listen(3000);
