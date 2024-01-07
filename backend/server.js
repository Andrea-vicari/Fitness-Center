require('dotenv').config();

const express = require('express');


const app = express();

app.use("/", (req,res)=>{
    res.send("Server is Running!")
})

// listen port
app.listen(process.env.PORT , () =>{
    console.log(`Listening on port`, process.env.PORT);
})

