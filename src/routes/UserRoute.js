const { UserLoginGetController, UserRegistrationGetController, UserRegisterPostController, UserVerifyGetController, UserLoginPostController } = require("../controllers/UserRouteController")

const router = require("express").Router()

router.get('/login', UserLoginGetController)
router.get('/register', UserRegistrationGetController)
router.post('/register', UserRegisterPostController)
router.post('/login', UserLoginPostController)
router.get('/verify/:id', UserVerifyGetController)

module.exports = {
    path: "/users",
    router
}