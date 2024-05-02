const CarModel = require("../models/Model")
const citiesModel = require("../models/City")

exports.getModels = (brand) => CarModel.findOne({ brand })

exports.getCities = (area) => citiesModel.findOne({ area })

exports.createModels = () => citiesModel.create({
    area: "", cities: [
      
    ]


}) 