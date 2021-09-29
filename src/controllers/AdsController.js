
const { isValidObjectId } = require("mongoose")
const categories = require("../models/CategoryModel")
const users = require("../models/UserModel")
const { AddAdsValidation } = require("../modules/validations")

module.exports = class AdsRouteController {
    static async AdsGetController(req, res) {

        res.render('new_ad', {
            user: req.user,
            categoryList: await categories.find()
        })
    }

    static async AdsAddPostController (req, res){
        try {
            const {title, location, currensy, price, description, category, photos, phone} = await AddAdsValidation(req.body)


            console.log(req.body, req.files);
        } catch (error) {
            console.log(error);
            res.render('new_ad', {
                user: req.user,
                categoryList: await categories.find(),
                error: error.message
            })
        }
    }
}