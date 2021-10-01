const jwt = require('jsonwebtoken')
const {User, Role} = require('./../models')

exports.authentication = (req, res, next) => {
    let {authorization} = req.headers;
    
    if (!authorization) {
        return next({code: 401, message: 'Access Token Not Found'})
    }

    let token = authorization.split(' ')[1];
    

    req.user = token;
    next()
}

exports.authorization = (roles) => (req, res, next) => {
    let {user} = req;

    jwt.verify(user, 'skilvul-secret', async (err, result) => {
        if (err) {
            next({code: 401, message: err.message})
        } else {
            let userAuth = await User.findOne({where: {id: result.id}, include:[Role]});
            
            userAuth = userAuth.toJSON();
            
            if(roles.includes(userAuth.Role.role)) {
                next()
            } else {
                next({code: 403, message: 'Forbidden'})
            }
        }
    })

}