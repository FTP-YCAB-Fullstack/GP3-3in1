const {Category} = require ('./../models')

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