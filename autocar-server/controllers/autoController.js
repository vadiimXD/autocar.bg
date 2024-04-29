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

router.post("/get/cities", async (req, res) => {
    console.log(req.body)
    try {
        const cities = await autoService.getCities(req.body.area)
        console.log(cities," cities")
        res.send(cities)
    } catch (error) {
        res.send(false)
    }
})

router.get("/create/models", async (req, res) => {
try {
    await autoService.createModels()
    res.send(true)
} catch (error) {
    res.send(false)
}
})

module.exports = router
