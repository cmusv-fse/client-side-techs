const User = require("../models/user").User;

class JoinController {
  static join(username) {
    let user = new User(username);
    user.save();
    return "User created successfully: " + username;
  }
}

exports.JoinController = JoinController;
