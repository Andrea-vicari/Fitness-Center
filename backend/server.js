const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();

const app = express();

const workoutsRoutes = require('./routes/workouts');

app.use(express.json())

mongoose.connect(process.env.MONGO_URI);


app.get('/', (req,res)=>{

    return res.json("From the BackEnd side works fine Maybe!!")
});


app.use('/api/workouts', workoutsRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));