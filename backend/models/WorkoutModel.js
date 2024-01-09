const mongoose = require('mongoose')

const workoutsSchema = new mongoose.Schema({
    title:{
        type: String,
        requred: true

    },
    reps:{
        type: Number,
        requred: true
    },
    loads:{
        type: Number,
        requred: true
    }


},{ timestamps:true })


module.exports = mongoose.model("WorkoutModel", workoutsSchema);
