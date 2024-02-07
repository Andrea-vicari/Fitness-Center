const Workouts = require('../models/WorkoutModel');
const mongoose = require('mongoose');

// Get all workouts: OK
const viewAllWorkouts = async (req, res)=> {


    const allWorkouts = await Workouts.find({}).sort({createdAt: -1});
    res.status(200).json(allWorkouts)
}

// Get a specific workout: OK
const getSingleWorkout = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No WorkOut found"})
    }

    const workout = await Workouts.find(id);

    if(!workout){
      return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(workout);
}

// Create a NEW workout:
const createNewWorkOut = async (req, res)=> {

    const {today, user, title, series, reps, rest, loads} = req.body

    // Add doc to the Mongo DB

    try{
        const workout = await Workouts.create({today, user, title, series, reps, rest, loads})
        res.status(200).json(workout)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a WorkOut
const deleteWorkout = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No WorkOut found"})
    }

    const workout = await Workouts.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: "No WorkOut found"})
      }
      res.status(200).json(workout);
}

// Update a WorkOut
const updateWorkOut = async (req, res)=> {

    const {title, series, loads, rest, reps} = req.body

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No WorkOut found gg"})
    }

    const workout = await Workouts.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(workout);

}

module.exports = {
    createNewWorkOut, viewAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkOut
}