const express = require('express');

const {createNewUser, viewAllUsers, getSingleUser, deleteUser, updateUser} = require('../controllers/userController');


const router = express.Router();


router.get('/', viewAllUsers);

router.get('/:id', getSingleUser);

// Post
router.post('/', createNewUser);

// Delete
router.delete('/:id', deleteUser);

// Update
router.patch('/:id', updateUser);

module.exports = router;