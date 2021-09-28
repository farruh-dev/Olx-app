
const { isValidObjectId } = require("mongoose")
const categories = require("../models/CategoryModel")
const users = require("../models/UserModel")

module.exports = class AdsRouteController {
    static async AdsGetController(req, res) {

        res.render('new_ad', {
            user: req.user,
            categoryList: await categories.find()
        })
    }
}