const mongoose = require("mongoose")

const ModelSchema = new mongoose.Schema({
    brand: {
        type: String,
    },
    models: [{
        type: String
    }]
})


const CarModel = mongoose.model("carmodels", ModelSchema)

module.exports = CarModel;
