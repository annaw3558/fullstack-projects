const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    aboutme: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "",
    },
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);