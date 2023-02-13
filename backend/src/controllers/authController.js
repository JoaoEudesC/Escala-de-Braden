//Importação dos modulos
    const userSchema = require("../models/UserSchema")
    const bcrypt = require("bcrypt")
    const jwt = require("jsonwebtoken")



    require("dotenv").config()


    const authController = {}




    const SECRET = process.env.SECRET

    //Fazendo o login
    authController.login = (req , res) =>{
        
        try{
                //Validação de email
                userSchema.findOne({email:req.body.email} , (error , usuário) =>{
                    if(!usuário){
                        return res.status(401).json({
                            statusCode:401,
                            message:"Usuário não encontrado",
                            data:{
                                email:req.body.email
                            }
                        })
                    }
                    //Validação de senha
                    const ValidationPassword = bcrypt.compareSync(req.body.password, usuário.password)
                    if(!ValidationPassword){
                        return  res.status(401).json({
                            statusCode:401,
                            message:"Usuário não autorizado"
                        })
                    }
                    //Criação de token
                    const token = jwt.sign({name:usuário.name} , SECRET)
                    res.status(200).json({
                        statusCode:200,
                        message:"Login realizado com sucesso!",
                        data:{
                            token
                        }
                    })
                })
            }catch(error){
                console.log(error)
                res.status(500).json({
                    statusCode:500,
                    message:error.message
                })
            };
}







    authController.tokenVerification = (req , res , next) =>{
        const tokenHeader = req.headers["authorization"]
        const token = tokenHeader && tokenHeader.split(" ")[1]
        
        if(!token){
            return res.status(401).json({
                statusCode:401,
                message:"Não autorizado"
            })
        }
        
        try{
            jwt.verify(token , SECRET)
            next()
        
        }catch(error){
            console.error(error);
            res.status(500).json({
                statusCode:500,
                message:"Token náo válido"
            })
        }
    }


    
    module.exports = authController
























    //exportando modulo authController

    module.exports = authController