const express = require('express')
const router = express.Router()
const validatorMiddleware = require('./../middlewares/validator.middleware.js')
const orderValidator = require('./../validators/orders.validator.js')
const orderRepository = require('./../repositories/order.repository.js')
const orderService = require('./../services/orders.service.js')
const orderController = require('./../controllers/orders.controller.js')

const orderRepositoryFactory = orderRepository()
const orderServiceFactory = orderService(orderRepositoryFactory)
const orderControllerFactory = orderController(orderServiceFactory)

// handler / path : returns all exisiting orders
router.get('', orderControllerFactory.getAllOrders)

// handler /id path : returns a single order
router.get('/:id', orderControllerFactory.getOrderById)

// handle delete method

router.delete('/:id', orderControllerFactory.deleteOrder)

// handle new order creation
router.post('', validatorMiddleware(orderValidator.create), orderControllerFactory.createOrder)

// Handle order status updating
router.patch('/:id/status', orderControllerFactory.updateOrderStatus)


module.exports = router