//Configuração da tecla enter para enviar o formulário
const botaoEnviar = document.getElementById("Enviar")
document.addEventListener('keypress' , (e) =>{
    if(e.key === 'enter'){
        botaoEnviar.click();
    }
})




//Ligação da minha api com o front-end
