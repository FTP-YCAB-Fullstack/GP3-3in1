"use strict"

const OrderBarangRouter =  require('express').Router();
const OrderBarangController = require('../controller/orderBarangController')

OrderBarangRouter.get('/', OrderBarangController.getAll)
OrderBarangRouter.post('/', OrderBarangController.createOrderBarang)
OrderBarangRouter.get('/:orderBarangId', OrderBarangController.getDetail)
OrderBarangRouter.delete('/:orderBarangId', OrderBarangController.deleteOrderBarang)


module.exports = OrderBarangRouter