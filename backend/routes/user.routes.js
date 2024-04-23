const express = require('express');

const userRouter = express.Router()
const { UserModel } = require('../models/user.model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRouter.post('/register',(req,res)=> {

})

userRouter.post('/login', (req,res)=>{

})

module.exports = {
    userRouter
}