// SELEÇÃO DE ELEMENTOS



// 1 - Inputs

let percepeçaoSensorial = document.getElementById("percepçao_sensorial")
let humidade = document.getElementById("humidade")
let actividade = document.getElementById("Actividade")
let mobilidade = document.getElementById("Mobilidade")
let nutriçao = document.getElementById("Nutriçao")
let fricçao = document.getElementById("Fricçao")


// 2- Div-res

let res1 = document.getElementById("res1")
let res2 = document.getElementById("res2")
let res3 = document.getElementById("res3")
let res4 = document.getElementById("res4")
let res5 = document.getElementById("res5")
let res6 = document.getElementById("res6")




// 3- Formulários

let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")
let form3 = document.getElementById("form3")
let form4 = document.getElementById("form4")
let form5 = document.getElementById("form5")
let form6 = document.getElementById("form6")





//4- ul class hide ( selecionando a ul que esta dentro das divs res)

let hide = document.getElementsByClassName("hide")




//5 - Botão de logout

const logout = document.getElementById("Door")

logout.addEventListener("click" , () =>{
    window.location.href = "../index.html"
})





//CRIANDO FUNÇÕES



// 1- Percepção Sensorial


form1.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let n1 = Number(percepeçaoSensorial.value);

    
    
    
    if(n1==1){
        res1.innerHTML = "<h3>Percepção Sensorial:</h3>"
        res1.innerHTML +="<p> 1- Monitorizar o status sensorial do doente.</p>  <p> 1- Ajustar agentes fisicos ao status do doente(temperatura da água, ambiente...).</p>"
    }
    else if(n1==2){
        res1.innerHTML ="<h3> Percepção Sensorial: </h3> "
        res1.innerHTML +="<p> 2- Monitorizar o status sensorial do doente.<p/>     <p> 2- Ajustar vestuário do doente.<p/>"
    }

    else if(n1==3){
        res1.innerHTML = "<h3>Percepção Sensorial:</h3> "
        res1.innerHTML += "<p> 3- Avaliar a dor do doente(1x/turno).<p/>    <p> 3- Monitorizar o status sensorial do doente.</p>      <p> 3- Ajustar vestuário do doente.<p/>"
    }

    else if (n1==4){
        res1.innerHTML = "<h3>Percepção Sensorial:</h3> "
        res1.innerHTML += "<p> 4- Supervisionar o status sensorial do doente.</p>  <p> 4- Supervisionar o uso adequado do vestuário por parte do cliente.</p>"
    }

    else{
        res1.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"
    }
    percepeçaoSensorial.value = ""
    percepeçaoSensorial.focus()


})




// 2- Húmidade




form2.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let n2 = Number(humidade.value)

    if(n2==1){
        res2.innerHTML = "<h3> Húmidade: </h3>"
        res2.innerHTML += " <p> 1- Otimizar dispositivos de apoio à eliminação urinária/intestinal (2X/turno).</p>   <p> 1- Avaliar a pele do doente (1x/turno).</p>    <p> 1- Aplicar um creme protector da pele (barreira).</p> "
    }
    else if(n2==2){
        res2.innerHTML = "<h3> Húmidade: </h3>"
        res2.innerHTML += " <p> 2- Otimizar dispositivos de apoio à eliminação urinária/intestinal (1X/turno).</p>"
    }
    else if(n2==3){
        res2.innerHTML = "<h3> Húmidade: </h3>"
        res2.innerHTML += " <p> 3- Otimizar dispositivos de apoio à eliminação urinária/intestinal (1X/Dia).</p>  <p> 3- Promover a ventilação da unidade do doente.</p>"
    }
    else if(n2==4){
        res2.innerHTML = "<h3> Húmidade: </h3>"
        res2.innerHTML += " <p> 4- Otimizar dispositivos de apoio à eliminação urinária/intestinal (2X/Dia)</p>."
    }
    else{
        res2.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"
    }
    humidade.value = ""
    humidade.focus()
})




//3- Actividade





form3.addEventListener("submit", (e) =>{
    e.preventDefault()
    let n3 = Number(actividade.value)

    if(n3==1){
        res3.innerHTML = "<h3>Actividade:</h3>"
        res3.innerHTML += "<p> 1- Providenciar colchão de pressão alternada. </p>"
    }
    else if(n3==2){
        res3.innerHTML = "<h3> Actividade: </h3>"
        res3.innerHTML += "<p> 2- Assistir na alternância de posicionamento do doente na cadeira de rodas/caldeirão. </p>"
    }

    else if(n3==3){
        res3.innerHTML = "<h3> Actividade: </h3>"
        res3.innerHTML += "<p> 3- Instituir sobre a importância da mudança de posicionamento para a prevenção de úlceras por pressão.</p>  <p> 3- Incentivar a realização de atividade física (1x/dia).</p>"
    }
    else if(n3==4){
        res3.innerHTML = "<h3> Actividade: </h3>"
        res3.innerHTML += "<p> 4- incetivar o aumento da realização da atividade física.</p>  <p> 4- Providenciar dispositivos para auxíliar no posicionamento e transferência de forma autônoma.</p>"
    }
    else{
        res3.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"  
    }
    actividade.value = ""
    actividade.focus()
})





//4- Mobilidade

form4.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let n4 = Number(mobilidade.value)

    if(n4==1){
        res4.innerHTML = "<h3>Mobilidade:</h3>"
        res4.innerHTML += "<p> 1- Posicionar o doente de 2/2H. </p>  <p> 1- Realizar exercícios de mobilização passiva.</p>"
    }
    else if(n4==2){
        res4.innerHTML = "<h3>Mobilidade:</h3>"
        res4.innerHTML += "<p> 2- Assistir no posicionamento do doente de 2/2H. </p>  <p> 2- Assitir o doente no uso de dispositivos de apoio ao posicionamento e transferêcia.</p>   <p> 2- Assistir o doente na realização de exercício de mobilização passiva.</p>"
    }
    else if(n4==3){
        res4.innerHTML = "<h3>Mobilidade:</h3>"
        res4.innerHTML += "<p> 3- Supervisionar o posicionamento do doente.</p>  <p> 3- Supervisionar o doente no uso de dispositivos de apoio ao posicionamento.</p>   <p> 3- Supervisionar o doente na realização de exercícios de mobilização activa.</p>"
    }
    else if(n4==4){
        res4.innerHTML = "<h3>Mobilidade:</h3>"
        res4.innerHTML += "<p> 4- Incentivar o posicionamento do doente.</p>  <p> 4- Incentivar a deambulação do doente.</p>"
    }
    else{
        res4.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"
    }
    mobilidade.value = ""
    mobilidade.focus()
})







//5- Nutriçâo


form5.addEventListener("submit", (e)=>{
    e.preventDefault()
    let n5 = Number(nutriçao.value)

    if(n5==1){
        res5.innerHTML = "<h3>Nutrição:</h3>"
        res5.innerHTML += "<p> 1- Monitorizar o peso do doente (1x/dia).</p>   <p> 1- Monitorizar a ingestão calórica do doente.</p>   <p> 1- Aumentar a ingestão de proteínas do doente.</p>"
    }
    else if(n5==2){
        res5.innerHTML = "<h3>Nutrição:</h3>"
        res5.innerHTML += "<p> 2- Monitorizar o peso do doente (3/3dias).</p>   <p> 2- Monitorizar a ingestão hídrica do doente.</p>"
    }
    else if(n5==3){
        res5.innerHTML = "<h3>Nutrição:</h3>"
        res5.innerHTML += "<p> 3- Incentivar a ingestão hídrica do doente.</p>"
    }
    else if(n5==4){
        res5.innerHTML = "<h3>Nutrição:</h3>"
        res5.innerHTML += "<p> 4- Monitorizar o peso do doente (7/7dias).</p>"
    }
    else{
        res5.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"
    }
    nutriçao.value = ""
    nutriçao.focus()
})







//6- Fricção e forças de deslizamento


form6.addEventListener("submit", (e)=>{
    e.preventDefault()
    let n6 = Number(fricçao.value)

    if(n6==1){
        res6.innerHTML = "<h3>Fricção e forças de deslizamento:</h3> "
        res6.innerHTML += "<p> 1- Elevar a cabeceira da cama (30º).</p> <p> 1- Aplicação de creme hidratante.</p>  <p> 1- Proteger as proeminencias ósseas com recurso a almofadas.</p> "
    }
    else if(n6==2){
        res6.innerHTML = "<h3>Fricção e forças de deslizamento:</h3> "
        res6.innerHTML += "<p> 2- Manter os lençóis e roupa da cama esticadas (sem vincos).</p>    <p> 2- Assistir o doente no uso de dispositivos de proteção das proeminencias ósseas.</p>  <p> 2- Vigiar as proeminencias ósseas (1x/turno).</p> "
    }
    else if(n6==3){
        res6.innerHTML = "<h3>Fricção e forças de deslizamento:</h3> "
        res6.innerHTML += "<p> 3- Incentivar o ultente a realizar os cuidados de higiene diários de forma autónoma.</p> "
    }
    else{
        res6.innerHTML = "<p> A escala relacionada não existe, certifique o preenchimento dos campos e tente novamente. (Dados invalidos)</p>"
    }
    fricçao.value = ""
    fricçao.focus()
})