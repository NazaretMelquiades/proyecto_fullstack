// routes/users.routes.js
const express = require('express');
const usersController = require('../controllers/user.controller');
const router = express.Router();

// SIGNUP
// /api/users / signup
router.post('/signup', usersController.signUpUser);

// OBTAIN USER BY EMAIL
// /api/users/rafa@test.com
router.get('/:email', usersController.getUserByEmail);

// LOGIN
// /api/users/login
router.post('/login', usersController.logIn);

// LOGOUT
// /api/users/logout
router.post('/logout', usersController.logOut);

module.exports = router;
