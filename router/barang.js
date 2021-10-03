"use strict"

const BarangRouter =  require('express').Router();
const BarangController = require('../controller/barangController')
const auth = require('./../middleware/authMiddleware')

BarangRouter.get('/', auth.authentication, auth.authorization(['admin', 'user']), BarangController.getAll)
BarangRouter.get('/:barangId', auth.authentication, auth.authorization(['admin', 'user']), BarangController.getDetail)
BarangRouter.post('/', auth.authentication, auth.authorization(['admin']), BarangController.createBarang)
BarangRouter.patch('/:barangId', auth.authentication, auth.authorization(['admin']), BarangController.patchBarang)
BarangRouter.delete('/:barangId', auth.authentication, auth.authorization(['admin']), BarangController.removeBarang)


module.exports = BarangRouter