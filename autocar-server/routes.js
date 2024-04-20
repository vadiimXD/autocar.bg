const router = require("express").Router();

const authController = require("./controllers/authController")
const autoController = require("./controllers/autoController")

router.use(authController)
router.use(autoController)

module.exports = router