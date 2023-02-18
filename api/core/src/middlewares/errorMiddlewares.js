const Joi = require("joi")



const errorMiddleware = (err , req , res , next) => {
    console.log(req.body)
    if(Joi.isError(err)){
        return res.status(400).json({
            message:err.message
        })
    }

    else{
        returnres.status(500).json({
            message:"Server Error"
        })
    }

}


module.exports = errorMiddleware
