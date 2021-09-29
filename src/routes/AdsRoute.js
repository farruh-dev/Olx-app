const { AdsGetController, AdsAddPostController, AdsOneGetController } = require("../controllers/AdsController")
const fileUpload = require("express-fileupload")

const router = require("express").Router()

const fileUploadForAds = fileUpload(
    {
        safeFileNames: true,
    }
)

router.get('/add_ad', AdsGetController)
router.get('/:slug', AdsOneGetController)
router.post('/add_ad', fileUploadForAds, AdsAddPostController)


module.exports = {
    path: "/ads",
    router
}