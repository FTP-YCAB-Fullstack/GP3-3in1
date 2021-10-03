"use strict"

const CategoryRouter =  require('express').Router();
const CategoryController = require('../controller/categoryController')
const auth = require('./../middleware/authMiddleware')

CategoryRouter.get('/', auth.authentication, auth.authorization(['admin']), CategoryController.getAll)
CategoryRouter.post('/', auth.authentication, auth.authorization(['admin']), CategoryController.createCategory)
CategoryRouter.delete('/:categoryId', auth.authentication, auth.authorization(['admin']), CategoryController.removeCategory)


module.exports = CategoryRouter