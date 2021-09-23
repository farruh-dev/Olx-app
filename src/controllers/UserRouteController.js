const { SignUpValidation } = require("../modules/validations")

module.exports = class UserRouteController {
    static async UserRegistrationGetController(req, res){
        res.render('register')
    }
    static async UserLoginGetController(req, res){
        res.render('login')
    }
    static async UserRegisterPostController(req, res){
        try {
            const {name, email, password} = await SignUpValidation(req.body)
        } catch (error) {
            res.render('register', {
                error: error.message
            })
        }
    }
}