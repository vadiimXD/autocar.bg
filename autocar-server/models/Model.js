const mongoose = require("mongoose")

const ModelSchema = new mongoose.Schema({
    brand: {
        type: String,
    },
    models: [{
        type: String
    }]
})


const Model = mongoose.model("Model", ModelSchema)

module.exports = Model;
