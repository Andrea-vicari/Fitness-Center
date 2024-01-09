const cors = require('cors');
const express = require('express');
require ('dotenv').config();
const mongoose = require('mongoose')

const workoutsRoutes = require('./routes/workouts');


const app = express();


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})


app.use(express.json())

// app.use('/api/workouts', workoutsRoutes)


