const {Category} = require ('./../models')
const ModelCategory = require('../models').category

const categoryCon = { 
    getAll : async (req,res,next) => {
        try {
            const data = await Category.findAll()

            if(!data){ 
                return next ({code: 404 , message: 'Data not found'})
            }
            res.status(200).json({
                status : 'success',
                data
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }

    }
}

class CategoryController {
    static getAll = async (req,res,next) => {
        try {
            const data = await Category.findAll()

            if(!data){ 
                return next ({code: 404 , message: 'Data not found'})
            }
            res.status(200).json({
                status : 'success',
                data
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }

    static createCategory = async (req,res,next) => {
        try {
            const { categoryName } = req.body

            const newCategoryData = {
                categoryName : categoryName
            }

            const newData = await ModelCategory.create(newCategoryData)
            res.status(200).json({
                status : 'success',
                data: newData
            })
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
    }
}

module.exports = CategoryController