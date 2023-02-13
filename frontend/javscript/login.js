

//Seleção de elementos e com seus valores de senha e email respectivamente
    const email = document.getElementById("email").value
    const Senha = document.getElementsByTagName("input")[1]
    const eye = document.getElementById("eye")
    const form = document.getElementById("form")

    //Pegando o value do input de senha

    const password = Senha.value







//Mapeando o eneter para envio do formulário através do keypress
    document.addEventListener("keypress" , (e) =>{
        if(e.key === "enter"){
            form.onsubmit();
        }
    })

//Mapeando a tecla capslock para avisar ao usuário se a tecla está ativada ou não
    Senha.addEventListener("keyup" , (e) =>{
        const CapsLockMessage = document.getElementById("CapsLockMessage")
        if(e.getModifierState("CapsLock")){
            CapsLockMessage.style.display = "block"
        }
        else{
            CapsLockMessage.style.display = "none"
        }
    })


//Mapeando o icone do olho para mostrar a senha hasheada
eye.addEventListener("click" , ()=>{
    if(Senha.type == "password"){
        Senha.type = 'text'
    }
    else{
        Senha.type = 'password'
    }
})


//Função que adiciona os dados ao Localstorage  (Esta função será chamada dentro da função de submeter o formulário)
    function addLocalstorage(){
        localStorage.setItem("Email" , email)
        localStorage.setItem("Password" , password)
    };


//Autenticação e login => Ligação da minha api com o frontend
    
    const init = () =>{
        form.addEventListener("submit" , FormerSubmit)
    }

    const FormerSubmit = async (e) =>{
        e.preventDefault()
        const data = accessData();
        const url = "http://localhost:8080/usuario/login"
        const MessageError = document.getElementById("MessageError")
        
        //Função que adiciona os elementos ao localstorage
        addLocalstorage()
        
        if(!data){
            return console.log("Dados errados")
        }
        
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
            if(response.status == 200){
                window.location.href = "/home/joao/Escala-de-Braden2/frontend/html/page.html"
            }
            else{
                return MessageError.style.display = "block"
            }
        })
        .then((data) =>{
            console.log(data)
        })
        .catch((error)=>{
            return console.log("erro na requisição" + error)
        })
    }


    const accessData = () =>{
        return{
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
    };


//Chamada da função que diz respeito ao envio dos valores do inut para a variavel data que vai ser enviada ao backend através do post ( atenção os valores dos inputs tem que está associados ao schema criado no backend)
    accessData();

//Chamada da função que diz respeito ao envio do formulário
    init();





