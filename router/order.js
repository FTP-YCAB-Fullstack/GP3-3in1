"use strict"

const OrderRouter = require('express').Router();
const OrderController = require('../controller/order')

OrderRouter.get('/', OrderController.getAll)
OrderRouter.get('/:orderId', OrderController.getDetail)
OrderRouter.post('/', OrderController.createOrder)
OrderRouter.patch('/:orderId', OrderController.patchOrder)
OrderRouter.delete('/:orderId', OrderController.removeBarang)

module.exports = OrderRouter