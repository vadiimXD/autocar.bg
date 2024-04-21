const Model = require("../models/Model")

exports.getModels = (brand) => Model.findOne({ brand })

exports.createModels = () => Model.create({
    brand: "Datsun", models: [
        "Go",
        "Go+",
        "Redi-Go",
        "on-Do",
        "mi-Do",
        "Cherry",
        "Stanza",
    ]
}) 