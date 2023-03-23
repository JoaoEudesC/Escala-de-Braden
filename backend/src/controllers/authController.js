//Importação dos modulos
    const userSchema = require("../models/UserSchema")
    const bcrypt = require("bcrypt")
    const jwt = require("jsonwebtoken")
    const Crypto = require("crypto")
    const {transporterGmail} = require("../mail/mailler")



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

    //Função para enviar um token para o usuário por email para que ele possa recuperar a senha
    authController.forgotPassword = async(req,res) =>{
        const {email} = req.body;
        try {
            const user = await userSchema.findOne({email});
            if(!user){
                return res.status(400).json({error:'User not found'})
            }

            const token = Crypto.randomBytes(20).toString('hex');
            const now = new Date();
            now.setHours(now.getHours() + 1 )

            user.passwordResetExpires = now
            user.passwordResetToken = token
            await user.save()
            console.log(token)
            console.log(now)

            transporterGmail.sendMail({
                from:"joaoeudes91135538@gmail.com",
                to:email,
                subject:'Recuperação de senha',
                html:`<p>Esqueceu a senha?, não tem problema utilize o token enviado para redefinir a senha, o token expira dentro de 1 hora.</p>  <br></br> <p>token: ${token}</p>`,
                text:`Esqueceu a senha?, não tem problema utilize o token enviado para redefinir a senha. o token expira dentro de 1 hora. ${token}`
            })
            .then(() => {console.log("Email enviado com sucesso")})
            .catch(err => console.log(err))

            res.status(200).json({
                statusCode:200,
                message:"Token enviado com sucesso, cheque sua caixa de email"
            })
        
        } catch (error) {
            res.status(400).json('Erro on forgot password, try again' +  error)
        }
    }


    //Função para que o usuário possa redefinir sua senha através do token
    authController.resetPassword = async(req , res) =>{
        const {email, passwordResetToken, password} = req.body;      //Aqui eu estou dizendo que vou pegar estes elementos do corpo da requisição
        try {
            const user = await userSchema.findOne({email}) //Estou mandando ele achar o Email do corpo da requisição no banco de dados se ele não acahar vai retornar que o token é invalido
            .select('+passwordResetToken passwordResetExpires')
            if(!user){
                return res.status(400).json({error: "User not found"})
            }

            if(passwordResetToken !== user.passwordResetToken){
                return res.status(400).json({error: "Token invalid"})  //Se o token passado no corpo da requisição for diferente do token registrado no banco dados(Invalido)
            }

            const now = new Date();
            if(now > user.passwordResetExpires){
                return res.status(400).json({error: "Token expired, generate a new one"}) //Se a minha hora atual for maior do que a hora em que o token for gerado, ele ta expirado, ou seja , se ele for maior que 1 hora a mais
            }

            user.password = password    //Se passar por todas as validações a senha vai sofrer um update, sendo a passada na requisição atribuida a que está no banco de dados
            await user.save()


            res.status(200).json({
                message:"Senha atualizada com sucesso",
                statusCode:200
            })
        } catch (error) {
            res.status(400).send({error: "Cannot reset password, try again" + error})
        }
    }
    


    
    module.exports = authController
























    //exportando modulo authController

    module.exports = authController