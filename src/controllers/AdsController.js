
const { isValidObjectId } = require("mongoose")
const categories = require("../models/CategoryModel")
const users = require("../models/UserModel")
const { AddAdsValidation } = require("../modules/validations")
const path  = require("path")

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

            let photosArr = []
            let name

            if(req.files){
                if(Array.isArray(req.files.photos)){
                    req.files.photos.forEach(photo => {
                        name = photo.md5+".jpg"
                        photo.mv(path.join(__dirname, "..", "public", "uploads", name))
                        photosArr.push(name)
                    });
                }else{

                    name = req.files.photos.md5+".jpg"
                    req.files.photos.mv(path.join(__dirname, "..", "public", "uploads", name))
                    photosArr.push(name)
                }
    
                console.log(photosArr);
            }

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