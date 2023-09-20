var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

var things = require("./things.js");
var stuff = require("./stuff.js");

//Middleware function to log request protocol
// app.use("/things", function (req, res, next) {
//   console.log("A request for things received at " + Date.now());
//   next();
// });

// home directory
// .all similar to rails resources
// var personSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   nationality: String,
// });
// var Person = mongoose.model("Person", personSchema);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/person", function (req, res) {
  res.render("person");
});
// app.get("/first_template", function (req, res) {
//   res.render("first_view");
// });

// app.get("/dynamic_view", function (req, res) {
//   res.render("dynamic", {
//     name: "Hayden's Dynamic Page",
//     url: "http://google.com",
//   });
// });

// pages
app.use("/things", things);
app.use("/stuff", stuff);

app.listen(3000);
