const HomeRoute = require("./HomeRoute")

module.exports = (app) => {
    app.use(HomeRoute.path, HomeRoute.router)
}