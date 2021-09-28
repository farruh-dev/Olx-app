const {
    UserLoginGetController,
    UserRegistrationGetController,
    UserRegisterPostController,
    UserVerifyGetController,
    UserLoginPostController,
    UserProfileGetController,
    UserReVerifyPostController
} = require("../controllers/UserRouteController")

const router = require("express").Router()

router.get('/login', UserLoginGetController)
router.get('/register', UserRegistrationGetController)
router.get('/verify', UserVerifyGetController)
router.get('/profile', UserProfileGetController)
router.post('/register', UserRegisterPostController)
router.post('/login', UserLoginPostController)
router.get('/verify/:id', UserVerifyGetController)
router.get('/reverify/:id', UserReVerifyPostController)

module.exports = {
    path: "/users",
    router
}