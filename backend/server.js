const express = require("express");

const app = express();
require('dotenv').config()

const { connection } = require('./models/user.model')

app.get('/',(req,res)=>{
    res.send({msg: "hello"});
})


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("mongodb started");
        console.log(`server successfully started in http://localhost:${process.env.PORT}`);
    } catch (err) {
         console.log("error", err);
    }
})