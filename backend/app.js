const express = require('express')
const app = express()
const errorMiddleware = require("./middleware/error")

// importing routes from controller
const product = require('./routes/productRoute') 

app.use(express.json())

//routes
app.use("/api/d1", product)


//error middleware
app.use(errorMiddleware)
module.exports = app