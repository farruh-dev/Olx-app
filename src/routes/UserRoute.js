const { UserLoginGetController, UserRegistrationGetController, UserRegisterPostController } = require("../controllers/UserRouteController")

const router = require("express").Router()

router.get('/login', UserLoginGetController)
router.get('/register', UserRegistrationGetController)
router.post('/register', UserRegisterPostController)

module.exports = {
    path: "/users",
    router
}