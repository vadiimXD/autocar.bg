const CarModel = require("../models/Model")
const citiesModel = require("../models/City")

exports.getModels = (brand) => CarModel.findOne({ brand })

exports.getCities = (area) => citiesModel.findOne({ area })

exports.createModels = () => citiesModel.create({
    area: "Благоевград", cities: [
        "Банско",
        "Белица",
        "Благоевград",
        "Гоце Делчев",
        "Гърмен",
        "Кресна",
        "Петрич",
        "Разлог",
        "Сандански",
        "Сатовча",
        "Симитли",
        "Струмяни",
        "Хаджидимово",
        "Якоруда",
    ]


}) 