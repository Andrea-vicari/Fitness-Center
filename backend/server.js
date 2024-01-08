const mysql = require('mysql');
const cors = require('cors');
const express = require('express');


const app = express();

app.use(cors());

app.use(cors(
    {
        origin: ["mern-stack-zeta.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://andreavicari77:<password>@mern-vercel.1iyqseq.mongodb.net/?retryWrites=true&w=majority');



app.get('/', (re,res)=>{

    return res.json("From the BackEnd side")
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));