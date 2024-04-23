const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    profilePic : {type : String},
    username : {type : String},
    bio : {type : String},
    phone : {type: Number},
    email : {type : String},
    password : {type :String}
}, {
    versionKey : false
})

const UserModel = mongoose.model("users",userSchema);

module.exports = {
    UserModel
}