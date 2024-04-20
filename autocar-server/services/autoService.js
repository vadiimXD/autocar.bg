const Model = require("../models/Model")

exports.getModels = (brand) => Model.findOne({ brand })
