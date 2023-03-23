const nodemailler = require("nodemailer")


//Transporter para o email do hotmail

const transporterGmail = nodemailler.createTransport({
    host:'smtp.gmail.com', 
    port:465,
    secure:true, // o secure ela é true para a porta 465 , false para as outras
    auth:{
        user:"joaoeudes91135538@gmail.com",
        pass:"wknagomyhfmiiyxn"
    }
});


module.exports = {transporterGmail}