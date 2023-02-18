//Pegando todos os inputs 
    const Name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')


//Pegando a tag do formulário
    const form = document.getElementById('form')


//Mapeando a tecla enter para enviar o formulário
    document.addEventListener('keypress' , (e) =>{
        if(e.key === 'enter')
        form.onsubmit();
    })




//Mapeando a tecla capslock para avisar ao usuário quando a tecla estiver ativada
    password.addEventListener('keyup', (e) =>{
        const AlertText = document.getElementById('AlertCapslock')
        if(e.getModifierState('CapsLock')){
            AlertText.style.display = 'block'
        }
        
        else{
            AlertText.style.display = "none"
        }
    })


    confirmPassword.addEventListener('keyup' , (e) =>{
        const textAlertConfirm = document.getElementById('AlertCapslockConfirm')
        if(e.getModifierState('CapsLock')){
            textAlertConfirm.style.display = "block"
        }
        else{
            textAlertConfirm.style.display = "none"
        }
    })



//Ligando minha tela de cadastro com minha tela de login
    const botaoLogin = document.getElementById("login")
    botaoLogin.addEventListener("click" , () =>{
        window.location.href = "file://wsl.localhost/Ubuntu/home/joao/Escala-de-Braden/frontend/index.html"
    })



//Ligando a minha api com o frontend
    const init = () => {
        form.addEventListener("submit" , submitform)
        }
            
        const submitform = async (e) =>{
            e.preventDefault();
        //Validação de senha e confirmar a senha , ter certeza que elas coiciden    
            let confirmSenha = document.getElementById("confirmPassword").value
            let senha = document.getElementById("password")
            let senhaValue = senha.value
            const AlertPassword = document.getElementById("Alertpassword")
            if(senhaValue != confirmSenha){
                senhaValue = ""
                confirmSenha = ""
                senha.focus()
                return AlertPassword.style.display = "block"
            }
        
        //Config dos dados a serem passados no fetch  e realização do fetcg api
            const data = accessData();
            const url = "http://localhost:3000/usuario/criar"
            if(!data){
                return alert("Dados não estão corretos")
            }
        //Mensagem de erro caso o email cadastrado já exista no banco de dados
            const existingEmailMessage = document.getElementById("existingEmailMessage")
            
            const Fetch = {
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json",
                },
                credentials: "same-origin"
            }
            
            await fetch(url , Fetch)
            .then((response) =>{
                if(response.status == 201){
                    return window.location.href = "file://wsl.localhost/Ubuntu/home/joao/Escala-de-Braden/frontend/index.html"
                }
                else if(response.status == 422){
                    return existingEmailMessage.style.display = "block"
                }
                else{
                    return alert ("Usuário não cadastrado, tente novamente")
                }
            })
            .then((data)=>{
                return console.log(data)
            })
            .catch((error) =>{
                return console.log("erro na requisição" + error)
            })
        }
    


    const accessData = () =>{
        return{
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
    }


//Chamada da função acessData que diz respeito ao envio do valor dos inputs para o backend no envio do fomulário
    accessData();

//Chamada da função init que diz respeito ao envio do formulário
    init();
    
    

    


















    