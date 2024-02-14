const express = require('express');

const {createNewWorkOut, viewAllWorkouts, deleteWorkout, updateWorkOut, getSingleWorkout, confirmWorkOut} = require('../controllers/workoutController');


const router = express.Router();

router.get('/', viewAllWorkouts);

router.get('/:id', getSingleWorkout);

// Post
router.post('/', createNewWorkOut);

// Delete
router.delete('/:id', deleteWorkout);

// Update
router.patch('/:id', updateWorkOut);

// Confirm
router.patch('/close/:id', confirmWorkOut);

module.exports = router;