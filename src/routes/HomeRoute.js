const { HomeGetController } = require("../controllers/HomeRouteController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.get('/', HomeGetController)

module.exports = {
    path: "/",
    router
}