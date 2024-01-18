const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();

app.use(express.json());

/* !!! Important to avoid CORS block (!! Check the final slash / )
app.use(cors(
    {
        origin: ["https://deploy-mern-api-render-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
*/

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })

const workoutsRoutes = require('./routes/workouts');
const usersRoutes = require('./routes/users');

app.use(workoutsRoutes)
app.use(usersRoutes)

app.use('/api/workouts', workoutsRoutes)
app.use('/api/users', usersRoutes)