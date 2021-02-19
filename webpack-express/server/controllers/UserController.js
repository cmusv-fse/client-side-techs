const User = require('../models/User');

exports.create = async (req, res, next) => {
  // TODO: pass in the reqeust body here
  try {
    const user = await User.create();
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
}

exports.list = async (req, res, next) => {
  // TODO: pass in the reqeust query here
  try {
    const users = await User.list();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
}

exports.find = async (req, res, next) => {
  // TODO: pass in the reqeust query here
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

exports.update = async (req, res, next) => {
  // TODO: pass in the reqeust body here
  try {
    const user = await User.update();
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

exports.remove = async (req, res, next) => {
  // TODO: pass in the reqeust body here
  try {
    const user = await User.remove();
    res.status(204);
  } catch (e) {
    next(e);
  }
}

