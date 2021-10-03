"use strict"

const CategoryRouter =  require('express').Router();
const CategoryController = require('../controller/categoryController')

CategoryRouter.get('/', CategoryController.getAll)
CategoryRouter.post('/', CategoryController.createCategory)
CategoryRouter.delete('/:categoryId', CategoryController.removeCategory)


module.exports = CategoryRouter