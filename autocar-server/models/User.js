const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        minLength: 2,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 5,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
    },
    cars: [{
        type: mongoose.Types.ObjectId,
        ref: "Car"
    }]
})

const User = mongoose.model("User", userSchema)

module.exports = User;