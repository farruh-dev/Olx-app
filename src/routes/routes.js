const AdminRoute = require("./AdminRoute")
const HomeRoute = require("./HomeRoute")
const UserRoute = require("./UserRoute")

module.exports = (app) => {
    app.use(HomeRoute.path, HomeRoute.router)
    app.use(UserRoute.path, UserRoute.router)
    app.use(AdminRoute.path, AdminRoute.router)

}