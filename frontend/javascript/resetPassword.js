//Função para esconder e mostra senha hasheada ao clicar no icone do olho

const inputSenha = document.getElementById("Senha")
const eye = document.getElementById("eye")

eye.addEventListener("click" , () =>{
    if(inputSenha.type == "password"){
        inputSenha.type = "text"
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
        
    }
    
    else{
        inputSenha.type = "password"
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    }
})



//Mapeando a tecla enter para o envio de formulário através do keypress
const botaoCadastro = document.getElementById("Cadastro")
document.addEventListener('keypress' , (e) =>{
    if(e.key === 'enter')
    botaoCadastro.click()
})




//Mapeando a tecla capslock para avisar ao usuário se a tecla está ativada ou não

inputSenha.addEventListener('keyup' , (e) =>{
    const capsLock = document.getElementById("capsLock")
    if(e.getModifierState('CapsLock')){
        capsLock.style.display = 'block'
    }
    else{
        capsLock.style.display = "none"
    }
})


const confirmarSenha = document.getElementById("confirmarSenha")

confirmarSenha.addEventListener('keyup' , (e) =>{
    const capsLockConfirm = document.getElementById("capsLockConfirm")
    if(e.getModifierState('CapsLock')){
        capsLockConfirm.style.display = 'block'
    }

    else{
        capsLockConfirm.style.display = "none"
    }
})


//Ligação da nossa api com o front-end para fazer a recuperação de senha do usuário através do token gerado