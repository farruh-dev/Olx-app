const mongo = require("../modules/mongoose");

async function databaseMiddleware(req, res, next) {
    const db = await mongo()
    req.db = db;
    next()
}

module.exports = databaseMiddleware