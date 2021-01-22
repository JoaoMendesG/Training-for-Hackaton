const express = require('express')
const app = express()
const bodyParser = require('body-parser') // npm install --save body-parser
const path = require('path')
const route = require('../routes/product-route')


app.set('clientPath', path.join(__dirname, '..', 'client'))
app.use(express.static(app.get('clientPath')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app)

module.exports = app