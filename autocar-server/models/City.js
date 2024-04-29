const mongoose = require("mongoose")

const CitiesSchema = new mongoose.Schema({
    area: {
        type: String,
    },
    cities: [{
        type: String
    }]
})


const CitiesModel = mongoose.model("cities", CitiesSchema)

module.exports = CitiesModel;
