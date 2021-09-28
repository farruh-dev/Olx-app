const { isValidObjectId } = require("mongoose")
const users = require("../models/UserModel")
const { createCrypt, compareCrypt } = require("../modules/bcrypt")
const mail = require("../modules/email")
const { createToken } = require("../modules/jwt")
const { SignUpValidation, LoginValidation } = require("../modules/validations")

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

            const user = await users.create({
                name, email, password: await createCrypt(password)
            })

            if(user){
                res.render('verify', {
                    message: `Hurmatli ${user.name}, sizning ${user.email} pochtangizga emailni tasdiqlash uchun link jo'natildi. Davom etish uchun emailingizni tasdiqlang.`
                })
            }
            await mail(email, "Iltimos emailingizni tasdiqlang", "Tasdiqlash uchun link:", `<a href="http://localhost:7889/users/verify/${user._id}">Tasdiqlash</a>`)

            
        } catch (error) {
            res.render('register', {
                error: error.message
            })
        }
    }
    static async UserVerifyGetController(req, res){
        try {
            const id = req.params.id

            if(!id) throw new Error("Verifikatsiyada xatolik yuz berdi")

            if(!isValidObjectId(id)) throw new Error("Verifikatsiyada xatolik yuz berdi")

            const user = await users.findOne(
                {
                    _id: id
                }
            );

            if(!user) throw new Error("Verifikatsiya kaliti xato")

            const x = await users.updateOne(
                {
                    _id: id
                }, 
                {
                    isVerified: true,
                }
            )

            res.cookie("token", await createToken({id: user._id})).redirect('/')

        } catch (error) {
            res.render("login", {
                error: error.message
            })
        }
    }
    static async UserLoginPostController(req, res) {
        try {

            const {email, password} = await LoginValidation(req.body)

            const user = await users.findOne(
                {
                    email: email,
                }
            )

            if(!user) throw new Error("Bunday foydalanuvschi mavjud emas!")

            if(! await compareCrypt(password, user.password)) throw new Error("Parol xato terilgan!")

            res.cookie("token", await createToken({id: user._id})).redirect('/')

        } catch (error) {
            console.log(error);
            res.render('login', {
                error: error.message
            })
        }
    }


}