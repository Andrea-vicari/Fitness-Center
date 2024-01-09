const Workouts = require('../models/WorkoutModel')

// Get all workouts:
const viewAllWorkouts = async (req, res)=> {

    const allWorkouts = await Workouts.find({}).sort({createdAt: -1});
    res.status(200).json(allWorkouts)
}


// Get a specific workout:

// Create a NEW workout:
const createNewWorkOut = async (req, res)=> {

    const {title, loads, reps} = req.body

    // Add doc to the Mongo DB

    try{
        const workout = await Workouts.create({title, loads, reps})
        res.status(200).json(workout)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}


// Delete a workout

module.exports = {
    createNewWorkOut,viewAllWorkouts
}