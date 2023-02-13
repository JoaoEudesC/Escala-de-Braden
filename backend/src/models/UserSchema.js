//importação de modulos
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

//Construção de criação do schema de criação da coleção do mongoose 


const userSchema = new mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,

        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
                type:String,
                required:true
        },

    },
        {timestamps:true}  



)



//Utilização do bcrypt para hashear a senha


userSchema.pre("save" , async function (next){
    this.password = await bcrypt.hash(this.password , 10);
    next();
})


module.exports = mongoose.model("enfermeiros" , userSchema)








