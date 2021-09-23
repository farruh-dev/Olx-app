const express = require("express")

const path = require("path")
const morgan = require("morgan")
const cookieParser = require("cookie-parser");
const databaseMiddleware = require("./middlewares/dbMiddleware");

const PORT = process.env.PORT || 5656;

async function server(mode) {

    const app = express()
    app.listen(PORT, () => {
        console.log(`Server ready at ${PORT} `);
    })

    try {
        app.use(express.json())
        app.use(express.static(path.join(__dirname, "public")))
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(cookieParser())
        app.use(databaseMiddleware)

        if(mode == "DEV"){
            app.use(morgan("dev"))
        }

        app.set("view engine", "ejs")

    } finally {

    }


}


module.exports = server


