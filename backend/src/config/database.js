const mongoose = require("mongoose")

require("dotenv").config();

const MONGODB_URI  = process.env.MONGODB_URI 



const connect = async() =>{
    try{
            await mongoose.connect(MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Banco conectado")
    
    }catch(error){
        console.log("Erro de ligação" , error.message)
    }
};







module.exports = {
    connect,
};