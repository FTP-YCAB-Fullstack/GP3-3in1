const {User} = require('./../models')

exports.getData = async (req, res, next) => {
    try {
        let data = await User.findAll();

        if (!data) {
            return next({code: 404, message: 'Users not found'})
        }

        res.status(200).json({
            status: 'success',
            data
        })
    } catch(err) {
        next({code: 500, message: err.message || 'Internal Server Error'})
    }
}