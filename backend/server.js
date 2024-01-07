const mysql = require('mysql');
const cors = require('cors');
const express = require('express');


const app = express();

app.use(cors());
app.use(express.static('public'));


app.get('/', (re,res)=>{

    return res.json("From the BackEnd side")
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));