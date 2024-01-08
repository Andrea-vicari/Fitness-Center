const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')


const app = express();

app.use(cors({
    origin: ["https://mern-stack-gp2j.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(express.json())
mongoose.connect('mongodb+srv://andreavicari77:DuRIkZ0u0redNhqB@mern-vercel.1iyqseq.mongodb.net/?retryWrites=true&w=majority');


app.get('/', (re,res)=>{

    return res.json("From the BackEnd side")
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));