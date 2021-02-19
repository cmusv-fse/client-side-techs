const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
module.exports = router
  .get('/users', UserController.list)
  .get('/users/:id', UserController.find)
  .post('/users', UserController.create)
  .patch('/users/:id', UserController.update)
  .delete('/users/:id', UserController.remove);
