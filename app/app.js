const { urlencoded, json } = require('express')
const express = require('express')
const port = process.env.PORT || 8000
const path = require('path')
const cors = require('cors')

// inizialization
const app = express()

// setting
app.set('port', port)

//middleware
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

//routes
app.use('/images', require('./routes/images.routes'))

//public static files
app.use(express.static(path.join(__dirname, '../public')))

module.exports = app