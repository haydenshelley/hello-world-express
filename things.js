var express = require("express");
var router = express.Router();

//get
router.get("/", function (req, res) {
  res.send("GET route on things.");
});
//post
router.post("/", function (req, res) {
  res.send("POST route on things.");
});
//show
router.get("/:id", function (req, res) {
  res.send("id: " + req.params.id);
});

//export this router to use in our index.js
module.exports = router;
