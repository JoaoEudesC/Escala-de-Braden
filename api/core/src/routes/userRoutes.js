//Config do router
const express = require("express")
const router = express.Router()


//Importação dos controllers
const userController = require("../controllers/UserController")
const authController = require("../controllers/authController")

//Importação dos middlewares de erro , login e cadastro
    const {loginValidate} = require("../middlewares/userMiddleware")
    const {registerValidate} = require("../middlewares/userMiddleware")
    const ErrorMiddleware = require("../middlewares/errorMiddlewares")

//Importação de middlewares de checagem se email já existe no banco de dados
    const {checkExistingEmail} = require("../middlewares/repetionMiddleware")
    




//Rota que irá lert todos os usários do banco de dados (READ - GET)

router.get("/todos" , userController.getAll)

//Rota que irá pegar os usuários pelo seu id (READ - GET)

router.get("/:id" , userController.getUserById)

//Rota que irá criar um novo usuário no banco de dados (POST)
router.post("/criar" , checkExistingEmail , registerValidate, userController.createUser)

//Rota que irá dá um update em um usuário existente(UPDATE - PUT)
router.put("/:id" , userController.updateUserById)

//Rota que irá pegar o usuário pelo id e enviar um email como resposta da requisição(GET-ID)

router.get("/email/:id" , userController.getByIdAndShowEmail)

//Rota que irá deletar os usuários com base no seu id (DELETE)

router.delete("/:id" , userController.deleteById)

//Rota de login , que o usuário irá cadastrar seu email e senha e acontecerá a geração de um token ( POST)

router.post("/login" , loginValidate ,authController.login)

//Rota autenticada , que irá dizer se o token existe ou não (POST)

router.post("/rotaAutenticada" , userController.rotaAutenticada , authController.tokenVerification)

//Rota de teste
router.get("/teste" , userController.teste)



//Middleware de erro , no final de todas as rotas

router.use(ErrorMiddleware)





module.exports = router