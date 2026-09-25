const express = require('express')
const orderRouteHandler = require('./routes/order.route.js')

const app = express()

app.use(express.json())

app.use('/orders', orderRouteHandler)

app.listen(3000)