const {
    UserLoginGetController,
    UserRegistrationGetController,
    UserRegisterPostController,
    UserVerifyGetController,
    UserLoginPostController,
    UserProfileGetController,
    UserReVerifyController,
    UserReverifyGetController,
    UserLogoutController
} = require("../controllers/UserRouteController")

const router = require("express").Router()

router.get('/login', UserLoginGetController)
router.get('/register', UserRegistrationGetController)
router.get('/profile', UserProfileGetController)
router.get('/reverify', UserReverifyGetController)
router.get('/logout', UserLogoutController)
router.post('/register', UserRegisterPostController)
router.post('/login', UserLoginPostController)
router.get('/reverify/:id', UserReVerifyController)
router.get('/verify/:id', UserVerifyGetController)

module.exports = {
    path: "/users",
    router
}