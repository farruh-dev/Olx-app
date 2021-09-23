module.exports = class UserRouteController {
    static async UserRegistrationGetController(req, res){
        res.render('register')
    }
    static async UserLoginGetController(req, res){
        res.render('login')
    }
}