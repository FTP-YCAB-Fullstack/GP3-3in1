"use strict"

const BarangRouter =  require('express').Router();
const BarangController = require('../controller/barang')

BarangRouter.get('/', BarangController.getAll)
BarangRouter.get('/:barangId', BarangController.getDetail)
BarangRouter.post('/', BarangController.createBarang)
BarangRouter.patch('/:barangId', BarangController.patchBarang)
BarangRouter.delete('/:barangId', BarangController.removeBarang)


module.exports = BarangRouter