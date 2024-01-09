const cors = require('cors');
const express = require('express');
require ('dotenv').config();

const app = express();

app.use(cors({
    origin: ["https://mern-stack-gp2j.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(express.json())



app.get('/', (re,res)=>{

    return res.json("From the BackEnd side works fine!!")
});


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));