<<<<<<< HEAD
const {Category} = require ('../models')
const CategoryModel = require('../models').category
=======
const ModelCategory = require('../models').category
>>>>>>> d7a561e1c3665da28fcd2c23aa23f08251fa0b24

class CategoryController {
    static getAll  = async (req,res,next) => {
        try {
            const data = await Category.findAll()

            if(!data){ 
                return next ({code: 404 , message: 'Data not found'})
            }
            res.status(200).json(data)
        } catch (err) {
            next({code: 500, message: err.message || 'Internal Server Error'})
        }
<<<<<<< HEAD
=======
    }
    static createCategory = async (req,res,next) => {
        try {
            const { categoryName } = req.body
>>>>>>> d7a561e1c3665da28fcd2c23aa23f08251fa0b24

    }
    static removeCategory = async (req,res,next) =>{
        try {
            const { categoryId } = req.params
            const data = await ModelCategory.findOne({
                where : {
                    id: categoryId
                }
            });
            if(!data) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            await data.destroy()

            res.status(204).json({
                message: "order has been deleted"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController