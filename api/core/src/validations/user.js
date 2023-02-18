
    const joi = require("joi")


    //Schema do joi para cadastro

const registerSchema = joi.object({
    name: joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(3).max(20).required()
})



    //Schema do joi para o  login

    const loginSchema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(3).max(20).required()
    })




module.exports = {
    registerSchema,
    loginSchema
}