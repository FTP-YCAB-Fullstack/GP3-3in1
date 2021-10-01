const {Category} = require ('../models')
const CategoryModel = require('../models').category

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

    }
}

module.exports = CategoryController