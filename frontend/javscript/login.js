

//Mapeando o enter para envio do formulário através do keypress
const form = document.getElementById("form") 
    document.addEventListener("keypress" , (e) =>{
        if(e.key === "enter"){
            form.onsubmit();
        }
    })

//Mapeando a tecla capslock para avisar ao usuário se a tecla está ativada ou não
    const Senha = document.getElementsByTagName("input")[1]

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
    const eye = document.getElementById("eye")

    eye.addEventListener("click" , ()=>{
        if(Senha.type == "password"){
            Senha.type = 'text'
        }
        else{
            Senha.type = 'password'
        }
    })







//Função que vai ativar o botão lembre-me para que o usuário possa salvar os dados colocados no input e na senha Através do localStorage
    //Verificação quando a pagina é carregada se há dados do usuário salvos no localStorage, podemos fazer isso através do DOMContentLoaded(com essa função if eu estou dizendo basicamente que se tiver um password e um email no localStorage eu vou pegar os valores dos inputs e passar lá, como o checkBox marcado true) => primeira validação
    //Explicação desta função => sempre que a pagina for recarregada ele vai verificar se há umvalor com um key password e email no localstorage, caso haja ele vai igualar o valor do input aos valores correspondentes a estas chaves no localstorage e o checkBox vai estar marcado
    document.addEventListener("DOMContentLoaded" , () =>{
        if(localStorage.getItem("email") && localStorage.getItem("password")){
            document.getElementById("email").value = localStorage.getItem("email");
            document.getElementById("password").value = localStorage.getItem("password")
            document.getElementById("Check1").checked = true;

        }
    });


//Adicionando evento de change no inpunt checkBox para verificar se ele ta marcaddo ou desmarcado ( quando ele é marcado salvo os valores do email e da senha no localStorage , quando ele for desmarcado eu removo)

let CheckBox = document.getElementById("Check1")
let inputEmail = document.getElementById("email")
let inputSenha = document.getElementById("password")

CheckBox.addEventListener("change" , () =>{
    if(CheckBox.checked){
        localStorage.setItem("email" , inputEmail.value)
        localStorage.setItem("password" , inputSenha.value)
    }
    else{
        localStorage.removeItem("email")
        localStorage.removeItem("pasword")
    }
});








//Autenticação e login => Ligação da minha api com o frontend

    const init = () =>{
        form.addEventListener("submit" , FormerSubmit)
    }

    const FormerSubmit = async (e) =>{
        e.preventDefault()
        const data = accessData();
        const url = "http://localhost:3000/usuario/login"
        const MessageError = document.getElementById("MessageError")
        
        
        
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





