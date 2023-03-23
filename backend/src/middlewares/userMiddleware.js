




    //Schema do joi para cadastro
const {registerSchema , UpdateSchema ,  updateForgotPassword} = require("../validations/user")

const registerValidate = (req , res , next) =>{
    const {error} = registerSchema.validate(req.body)

    if(error) throw error
    next()
}

const updateUser = (req , res , next) =>{
    const{error} = UpdateSchema.validate(req.body)

    if(error) throw error
    next()
}


const updateForgotPass = (req , res , next) =>{
    const {error} = updateForgotPassword.validate(req.body)

    if(error) throw error
    next()
}

    




module.exports = {
    registerValidate,
    updateUser,
    updateForgotPass
}