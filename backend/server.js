const cors = require('cors');
const express = require('express');


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

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));