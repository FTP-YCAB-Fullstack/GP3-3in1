"use strict"

const MainRouter = require('express').Router();
const BarangRouter = require('./barang')

MainRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ready'
    })
})

MainRouter.use('/barang', BarangRouter)

module.exports = MainRouter

