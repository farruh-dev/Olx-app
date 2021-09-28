const { AdsGetController } = require("../controllers/AdsController")

const router = require("express").Router()

router.get('/add_ad', AdsGetController)

module.exports = {
    path: "/ads",
    router
}