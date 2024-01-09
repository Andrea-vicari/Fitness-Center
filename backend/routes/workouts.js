const express = require('express');

const {
    createNewWorkOut
} = require('../controllers/workoutController');


const router = express.Router();

router.get('/', (req, res)=> {
    console.log(req.path, req.method)
    res.json({mssg: "getting the ww"})
});

router.get('/:id', (req, res)=> {
    res.json({mssg: "getting the single id"})
});

// Post
router.post('/', createNewWorkOut);

// Delete
router.delete('/:id', (req, res)=> {
    res.json({mssg: "Delete a new Workout"})
});

// Update
router.patch('/:id', (req, res)=> {
    res.json({mssg: "Upadate a workout"})
});

module.exports = router;