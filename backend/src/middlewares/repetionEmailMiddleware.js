//Middleware que impede que sejam criados usuários com o mesmo o email

const UserSchema = require("../models/UserSchema")





//Checando se o email já existe no banco de dados para impedir que vários emails iguais sejam cadastrados
    const checkExistingEmail = async(req , res , next) =>{
    //Procurando email do  usuário no banco de dados
        const existingEmail = await UserSchema.findOne({email:req.body.email})

        if(existingEmail){
            return res.status(422).json({
                statusCode:422,
                message:'este Email já existe'
            })
        }

        else{
            next()
        }
    }



module.exports ={
    checkExistingEmail
}




//Obs => Eu mando o status code duas vezes , pq a primeira vez so envia como codigo a segunda vez eu envio uma mensagem em json que fica realmente visivel
