const Joi = require("joi");

module.exports = class Validations {
	static async SignUpValidation(data) {
		return await Joi.object({
			name: Joi.string()
				.required()
				.min(3)
				.max(36)
				.trim()
				.error(new Error("Ism noto'g'ri kiritilgan")),
			email: Joi.string()
				.email()
				.required()
				.trim()
				.lowercase()
				.error(new Error("Email noto'g'ri kiritilgan")),
			password: Joi.string()
				.required()
				.error(new Error("Parol noto'g'ri kiritilgan")),
		}).validateAsync(data);
	}
	static async LoginValidation(data) {
		return await Joi.object({
			email: Joi.string()
				.email()
				.required()
				.trim()
				.lowercase()
				.error(new Error("Email noto'g'ri kiritilgan")),
			password: Joi.string()
				.required()
				.error(new Error("Parol noto'g'ri kiritilgan")),
		}).validateAsync(data);
	}

	static async AddAdsValidation(data) {
		return await Joi.object({
			title: Joi.string()
				.required()
				.min(8)
				.max(128)
				.trim()
				.error(new Error("Sarlavhada xato bor.")),
			price: Joi.number()
				.min(0)
				.required()
				.error(new Error("Narxda xato bor")),
			description: Joi.string()
				.required()
				.min(8)
				.max(1024)
				.error(new Error("Ta'rifda xato bor.")),
			category: Joi.string()
				.required()
				.error(new Error("Kategoriyada xato bor.")),
			photos: Joi.string(),
			phone: Joi.string()
				.required()
				.error(new Error("Raqam o'zbekistonni emas"))
				.pattern(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
		}).validateAsync(data);
	}
};