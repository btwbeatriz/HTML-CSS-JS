const botaoEnviar = document.getElementById("btn")

botaoEnviar.addEventListener("click", validaInputs)
function validaInputs(){

const inputs = document.querySelectorAll("input[type='text'],input[type='email'],input[type='password']")

for(let x = 0; x < inputs.length; x++){
    if(inputs[x].value == ""){
        alert("O campo " + inputs[x].name + " está sem preenchimento!")
        return
    }else{
        ("Cadastro realizado!")
    }
}
}