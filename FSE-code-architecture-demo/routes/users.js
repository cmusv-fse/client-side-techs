const express = require("express");
const router = express.Router();
const joinController = require("../controllers/joinController");

router.get("/", (req, res, next) => {
  res.send("users page");
});

router.post("/:username", joinController.join);

module.exports = router;
