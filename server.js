const express = require("express")
require("dotenv").config()
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5656;

app.use(express.static(path.join(__dirname, "public")))


app.listen(PORT, () => {
    console.log(`Server ready at ${PORT} `);
})