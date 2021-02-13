var express = require("express");
var router = express.Router();
let joinController = require("../controllers/joinController").JoinController;

router.get("/", function (req, res, next) {
  res.send("users page");
});

router.post("/:username", function (req, res, next) {
  let username = req.params.username;
  res.send(joinController.join(username));
});

module.exports = router;
