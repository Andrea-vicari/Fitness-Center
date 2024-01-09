const cors = require('cors');
const express = require('express');
require ('dotenv').config();

const workoutsRoutes = require('./routes/workouts');

const app = express();

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})


app.use(express.json())

app.use('/api/workouts', workoutsRoutes)


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));