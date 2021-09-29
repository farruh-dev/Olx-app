const mongoose = require("mongoose")

const adsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    currensy: {
        type: String,
        required: true,
    },

    photos: [String],
    placeholder: {
        type: String,
        default: "placeholder.png"
    },

    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
})

const ads = mongoose.model("Ads", adsSchema);

module.exports = ads;