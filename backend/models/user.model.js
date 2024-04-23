const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profilePic: { type: String },
    username: { type: String, unique: true },
    bio: { type: String, maxlength: 500 },
    phone: { type: String, maxlength: 20 },
    email: { type: String, unique: true },
    password: { type: String }
}, {
    versionKey: false
});

const UserModel = mongoose.model("users", userSchema);

module.exports = {
    UserModel
};
