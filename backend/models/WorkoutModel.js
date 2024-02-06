const mongoose = require('mongoose')

const workoutsSchema = new mongoose.Schema({
    title:{
        type: Date,
        required: false
    },
    user:{
        type: Number,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    reps:{
        type: String,
        required: true
    },
    rest:{
        type: Number,
        required: true
    },
    series:{
        type: Number,
        required: true
    },
    loads:{
        type: Number,
        required: true
    }


},{ timestamps:true })


module.exports = mongoose.model("WorkoutModel", workoutsSchema);
