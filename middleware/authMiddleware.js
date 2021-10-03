const jwt = require('jsonwebtoken')
const {User, Role} = require('./../models')

exports.authentication = async (req, res, next) => {
    try {
        let {accesstoken} = req.headers;
    
    if (!accesstoken) {
        throw new Error('access token Require')
    }

    const jwtPayload = jwt.verify(accesstoken , 'tokoSepatu')

    // console.log(jwtPayload)
    const user = await User.findOne({
        where :{
            id: jwtPayload.userId
        }
    })
    if (!user){
        throw new Error('invalid access token')
    }
    req.currentUser = {
        ...user.dataValues, 
        // role :'admin'
    }
    next()

    // let token = accestoken.split(' ')[1];
    
    req.user = token;
    next()
    

    } catch (error) {
        next(error)
    }
}

// perlu token yang berisi userId  
// lalu cek roleId dari userId yang telah di dapat
// setelah itu cek roleId tersebut apakah itu admin atau bukan.
// jika admin maka akan mendapatkan izin untuk melakukan beberapa proses yang hanya untuk admin 
// jika user maka akan di berikan izin untuk melakukan proses yang dapat di access user.



exports.authorization = (roles) => (req, res, next) => {
    try {
        const currentUser = req.currentUser;
        console.log(currentUser.role)
        if(!roles.includes(currentUser.role)){
            throw new Error ('unauthorize access');
        }
        next();
    } catch (error) {
        next(error)
    }
   

}