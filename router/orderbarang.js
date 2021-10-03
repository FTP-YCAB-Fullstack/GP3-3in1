"use strict"

const OrderBarangRouter =  require('express').Router();
const OrderBarangController = require('../controller/orderBarangController')
const auth = require('./../middleware/authMiddleware')

OrderBarangRouter.get('/', auth.authentication, auth.authorization(['admin']), OrderBarangController.getAll)
OrderBarangRouter.post('/', auth.authentication, auth.authorization(['user']), OrderBarangController.createOrderBarang)
OrderBarangRouter.get('/:orderBarangId', auth.authentication, auth.authorization(['admin', 'user']), OrderBarangController.getDetail)
OrderBarangRouter.delete('/:orderBarangId', auth.authentication, auth.authorization(['user']), OrderBarangController.deleteOrderBarang)
// auth.authentication, auth.authorization(['admin']),


module.exports = OrderBarangRouter