"use strict"

const BarangRouter =  require('express').Router();
const BarangController = require('../controller/barangController')

BarangRouter.get('/', BarangController.getAll)
BarangRouter.get('/:barangId', BarangController.getDetail)
BarangRouter.post('/', BarangController.createBarang)
BarangRouter.delete('/:barangId', BarangController.removeBarang)


module.exports = BarangRouter