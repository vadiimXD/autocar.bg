const router = require("express").Router();
const autoService = require("../services/autoService")

router.post("/get/models", async (req, res) => {
    console.log(req.body)
    try {
        const models = await autoService.getModels(req.body.brand)
        res.send(models)
    } catch (error) {
        res.send(false)
    }
})

module.exports = router
