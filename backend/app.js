const express = require('express')

const app = express()

app.use(express.json())

//routes
const product = require('./routes/productRoute')

app.use("/api/d1", product)

module.exports = app