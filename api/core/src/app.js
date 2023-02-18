//Config dos modulos

const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()



//Importação do router

const router = require("./routes/userRoutes")
app.use(express.json())

//importação de ligação do banco de dados

const db = require("./config/database")
db.connect();









//Rotas 

app.use(router)

app.use("/usuario" , router)




module.exports = app