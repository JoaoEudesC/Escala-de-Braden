




    //Schema do joi para cadastro
const {registerSchema} = require("../validations/user")

const registerValidate = (req , res , next) =>{
    const {error} = registerSchema.validate(req.body)

    if(error) throw error

    next()
}




    //Schema do joi para login
    const {loginSchema} = require("../validations/user")

    const loginValidate = (req , res , next) =>{
        const {error} = loginSchema.validate(req.body)

        if(error) throw error

        next()
    }





module.exports = {
    registerValidate,
    loginValidate
}