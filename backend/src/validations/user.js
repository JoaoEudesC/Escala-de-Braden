
    const joi = require("joi")


//Schema do joi para cadastro
    const registerSchema = joi.object({
    name: joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(3).max(20).required()
})


//Sistema do joi para recuperação de senha
    const updateForgotPassword = joi.object({
        password:joi.string().min(3).max(20).required(),
        email: joi.string().email().required(),
        passwordResetToken: joi.string().max(50).required()
    })


    
    
    
    
    
//Sistema do joi para a rota put de update
    const updateSchema = joi.object({
        name: joi.string(),
        email:joi.string().email(),
        password:joi.string().min(3).max(20)
    })



    




module.exports = {
    registerSchema,
    updateSchema,
    updateForgotPassword
    
}