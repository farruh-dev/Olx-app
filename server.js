const express = require("express")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5656;


app.listen(PORT, () => {
    console.log(`Server ready at ${PORT} `);
})