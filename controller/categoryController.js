const ModelCategory = require('../models').category

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