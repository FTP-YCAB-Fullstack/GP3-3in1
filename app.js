"use strict"
const express = require('express')
const Router =  require('./router')
const errorHandler = require ('./middleware/errorHandler')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(Router)
app.use(errorHandler)

const port = 3000

app.listen(port, () => console.log('Server is Running'))