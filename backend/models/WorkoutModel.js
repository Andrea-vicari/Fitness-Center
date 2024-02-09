const mongoose = require('mongoose')

const ExecutedSchema = new mongoose.Schema({ eseguito: Date });

const workoutsSchema = new mongoose.Schema({
    today:{
        type: Date,
        required: false
    },
    user:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
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
    },
    status:{
        type: String,
        required: false
    },
    esecuzioni: {
        type: [ExecutedSchema],
        default: undefined
      }


},{ timestamps:true })


module.exports = mongoose.model("WorkoutModel", workoutsSchema);
