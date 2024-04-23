const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    profilePic: { type: String },
    username: { type: String },
    bio: { type: String },
    phone: { type: String },
    email: { type: String },
}, {
    versionKey: false
});

const UserProfileModel = mongoose.model("userprofile", userProfileSchema);

module.exports = {
    UserProfileModel
};
