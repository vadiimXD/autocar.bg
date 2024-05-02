const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    damages: {
        type: String,
        trim: true,
        minLength: 2,
    },
    image: {
        type: String,
        required: true,
        trim: true,
        match: [/^https?:\/\//, "invalid url"],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 200,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2025
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    extras: {
        safety1: {
            type: String
        },

    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})


const Car = mongoose.model("Car", CarSchema)

module.exports = Car;
