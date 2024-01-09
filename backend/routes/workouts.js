const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.json({mssg: "getting the ww"})
});

router.get('/:id', (req, res)=> {
    res.json({mssg: "getting the single id"})
});

// Post
router.post('/', (req, res)=> {
    res.json({mssg: "Post a new Workout"})
});

// Delete
router.delete('/:id', (req, res)=> {
    res.json({mssg: "Delete a new Workout"})
});

// Update
router.patch('/:id', (req, res)=> {
    res.json({mssg: "Upadate a workout"})
});

module.exports = router;