"use strict"

const MainRouter = require('express').Router();
const BarangRouter = require('./barang')
const OrderRouter = require('./order')
const UserRouter = require('./user')

MainRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ready'
    })
})

MainRouter.use('/barang', BarangRouter)
MainRouter.use('/order', OrderRouter)
MainRouter.use('/users', UserRouter)

module.exports = MainRouter

