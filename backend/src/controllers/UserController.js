userController = {}

//importando modulos
const userSchema = require("../models/UserSchema")






//Rota que irá pegar todos os usuários do banco de dados cadastrados (READ - GET)

userController.getAll = (req , res) =>{
    userSchema.find(function(err , users){
        if(err){
            res.status(500).send({message: err.message})

        }
        res.status(200).send(users)
    })
}



//Rota que irá pegar o usuário pelo seu id (READ - GET)

userController.getUserById = async(req , res) =>{
    try{
        const user = await userSchema.findById(req.params.id , req.body)

        res.status(200).json({
            statusCode:200,
            message: "Usuário localizado com sucesso",
            data:{
                user
            }
        })

    }catch(err){
        console.log(err)
    }


}

//Rota que irá criar um novo usuário (POST)

userController.createUser = async(req , res) =>{
    try{
        const newUser = new userSchema(req.body)
        const savedUser = await newUser.save();

        res.status(201).json({
            statusCode:201,
            message:"Usuário criado com sucesso",
            data:{
                savedUser
            }
        })
    }catch(err){
        res.status(500).json({
            statusCode:500,
            message:err.message
        })
    }
}




//Rota que irá pegar um usuário pelo id e enviar o email do usuário como resposta da requisição(UPDATE - PUT)

userController.getByIdAndShowEmail = async(req , res) =>{
    try{
        const user = await userSchema.findById(req.params.id , req.body);
        res.status(200).json({
            statusCode: 200,
            message: "Usuário localizado com sucesso",
            usuário:user.email
        });
    }catch(err){
        console.log(err);
    }
}; 



//Rota que irá dar um update no usuário existente (UPDATE - PUT)

userController.updateUserById = async(req , res) =>{
    try{
        const user = await userSchema.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).json({
            statusCode: 200,
            message: "Usuário atualizado com sucesso",
            data:{
                user,
            },
        });
    }catch(err){
        console.log(err);
    }
}; 



//Rota que irá deletar os usuários através do seu id (DELETE)

userController.deleteById = async (req , res) =>{
    try{
            await userSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            statusCode:200,
            message:"Usuário Deletado com sucesso"
        })
    }catch(err){
        res.status(400).json({
            statusCode:400,
            message:err.message
        });
    }
};





//Rota de validação do token com sucesso (POST) => essa rota será a rota em que exibirá se o token é valido ou não , ou seja , se ele existe no usuário cadastrado

userController.rotaAutenticada = (req , res) =>{
    res.status(200).json({
        statusCode:200,
        message:"Rota autenticada"
    })
}

//Rota de teste

userController.teste = (req , res) =>{
    res.send("Funcionando")
}












//OBS => em typescript temos que criar o modelo ESS22 , que ja vem de fábrica no typescript, ao invés de utilizar o commonJs ( metodo require)
//OBS : para passar o erro como mensagem, utilize o erro que está dentro do catch e passe como .message





module.exports = userController


