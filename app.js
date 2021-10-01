"use strict"
const express = require('express')
const Router =  require('./router')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(Router)

const port = 3000

app.listen(port, () => console.log('Server is Running'))