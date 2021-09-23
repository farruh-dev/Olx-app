const { UserLoginGetController, UserRegistrationGetController } = require("../controllers/UserRouteController")

const router = require("express").Router()

router.get('/login', UserLoginGetController)
router.get('/register', UserRegistrationGetController)

module.exports = {
    path: "/users",
    router
}