const bycrpt = require ('bcryptjs')
const jwt   = require ('jsonwebtoken')
const {User} = require ('./../models')
const userModel = require ('./../models').User


    
exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            where: {
                email: email,
            },
        })
        if(!user){
            throw new Error('Either email or password is wrong')
        }
        console.log(user)
        const checkPass = bcrypt.compareSync(password, user.password)
        if(!checkPass){ 
            throw new Error('Either email or password is wrong')
        }
        const jwtPayload = {
            userId: user.id, 
        }
        const accesToken = jwt.sign(jwtPayload,'tokoSepatu')
        res.status(200).json({
            message:'Login Success',
            accesToken : accesToken,
        })
        
    } catch(error) {
        next(error)
    }
}
    exports.register= async (req , res, next) => {
        try {
            let {email,password, nama , contact } = req.body;
            if (!nama|| !email || !password ||!contact){
                next({code: 400, message: 'Fill username and password form'})
            }

            password = bycrpt.hashSync(password,8);
            await User.create ({nama,email, password,contact, roleId:2})

            res.status(201).json({
                status : 'success ',
                message : 'Your registration is success '
            })
            
        } catch (err) {
            next ({code : 500 , message: err.message || 'Internal Server Error'})
        }
    }
