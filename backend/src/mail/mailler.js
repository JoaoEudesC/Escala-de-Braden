const nodemailler = require("nodemailer")


//Transporter para o email do hotmail

const transporterHotmail = nodemailler.createTransport({
    host:'smtp.office.com', 
    port:587,
    secure:false, // o secure ela é true para a porta 465 , false para as outras
    auth:{
        user:"joaoeudes91135538@hotmail.com",
        pass:"Hadassa2609"
    }
});


module.exports = {transporterHotmail}