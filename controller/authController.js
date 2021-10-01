const bycrpt = require ('bcryptjs')
const jwt   = require ('jsonwebtoken')
const {User} = require ('./../models')


    exports.login =  async (req,res,result) => {
        try{
            let {email,password} = req.body; 
            const exist = await User.findOne({where: {email}})
            if(!exist){
                return next ({code: 401 , message: 'Either email or password is wrong'})
            }else{
                let auth = bycrpt.compareSync(exist.password, password);
                if(auth){
                    const token = jwt.sign({id: exist.id},'secret-pass');
                    res.status(200).json({
                        status : 'success',
                        token
                    })
                }else{
                    return next ({code : 401 , message : 'Either email or password is wrong'})
                }
            }

        }
        catch (err){

        }
    },

    exports.register= async (req , res, next) => {
        try {
            let {email,password, nama , contact } = req.body;
            if (!email || !password || !nama || !contact){
                next({code: 400, message: 'Fill username and password form'})
            }

            password = bycrpt.hashSync(password,8);
            console.log(password.length)

            await User.create ({nama,email, password,contact, roleId:2})

            res.status(201).json({
                status : 'success ',
                message : 'Your registration is success '
            })
            
        } catch (err) {
            next ({code : 500 , message: err.message || 'Internal Server Error'})
        }
    }
