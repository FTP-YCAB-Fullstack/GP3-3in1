"use strict"

const MainRouter = require('express').Router();
const BarangRouter = require('./barang')
const UserRouter = require('./user')

MainRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ready'
    })
})

MainRouter.use('/barang', BarangRouter)
MainRouter.use('/users', UserRouter)

module.exports = MainRouter

