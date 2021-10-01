const jwt = require('jsonwebtoken')
const {User, Role} = require('./../models')

exports.authentication = async (req, res, next) => {
    try {
        let {accesstoken} = req.headers;
    
    if (!accesstoken) {
        throw new Error('access token Require')
    }

    // const jwtPayload = jwt.verify(accesstoken , 'tokoSepatu')
    let token = accestoken.split(' ')[1];
    

    req.user = token;
        
    } catch (error) {
        next(error)
    }
    
    
}

exports.authorization = (roles) => (req, res, next) => {
    let {user} = req;

    jwt.verify(user, 'tokoSepatu', async (err, result) => {
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