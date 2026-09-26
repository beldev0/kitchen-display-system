const express = require('express')
const orderRouteHandler = require('./routes/order.route.js')
const errorMiddleware = require('./middlewares/error.middleware.js')
const app = express()

app.use(express.json())

app.use('/orders', orderRouteHandler)

app.use('/{*any}', (req, res, next) => {
    res.status(404).json({"error": ["Oups ! URL not found."]})
    next()
})

app.use(errorMiddleware)

app.listen(3000)