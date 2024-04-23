const express = require('express');

const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send({msg: "hello"});
})

app.listen(process.env.PORT,()=>{
    console.log(`server successfully started in htttp:localhost:${process.env.PORT}`);
})