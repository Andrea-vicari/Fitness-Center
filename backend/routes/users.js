const express = require('express');

const {signupUser, loginUser, seeAllUser} = require('../controllers/userController');


const router = express.Router();

// See All
router.get('/', seeAllUser)

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);


module.exports = router;