
const { isValidObjectId } = require("mongoose")
const categories = require("../models/CategoryModel")
const users = require("../models/UserModel")

module.exports = class CategoryRouteController {
    static async CategoryGetController(req, res) {

        const {id} = req.params

        console.log(id);

        if(!isValidObjectId(id)){
            res.redirect('/')
            return
        }

        const category = await categories.findOne( 
            {
                _id: id
            }
        )

        res.render('category', {
            user: req.user,
            category,
            categoryList: await categories.find()
        })
    }
}