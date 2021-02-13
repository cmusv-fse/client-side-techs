const User = require("../models/user");

class JoinController {
  static join(req, res) {
    const username = req.params.username;
    const user = new User(username);
    user.save();
    const response = "User created successfully: " + username;
    res.send(response);
  }
}

module.exports = JoinController;
