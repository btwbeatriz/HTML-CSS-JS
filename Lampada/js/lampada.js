//Exercício da Lâmpada
//Crie um programa que simule a luz de uma lâmpada.
/*
1. Crie 2 botões, um para ligar e outro para desligar a lâmpada.
2. Crie uma div e adicione um elemento img com o id "img-lampada"
3. Crie um evento para o botão ligar, que adicione o atributo src da imagem com o valor "img/lampada-acesa.png"
4. Crie um evento para o botão desligar, que adicione o atributo src da imagem com o valor "img/lampada-apagada.png" */ 

// Função que adiciona atributo a um elemento
function adicionarAtributo(elemento, valor) {
    const elementoSelecionado = document.querySelector(elemento)
    elementoSelecionado.src = valor
}

// Pega o botão pelo id
const btn = document.getElementById("btn")
const colors = ["red", "green"]
let index = 0

// Evento click e estilização do botão
btn.addEventListener("click", onClick);
btn.innerHTML = "CLIQUE AQUI"
btn.style.fontWeight = "bold"
btn.style.backgroundColor = "#F5DEB3"

// Função para trocar o img, background-color e a escrita do botão
function onClick(){
    btn.style.backgroundColor = colors[index]
    index = index >= (colors.length - 1) ? 0 : index + 1;
    if (btn.style.backgroundColor = colors[index] == 'green') {
        adicionarAtributo("#img-lampada", "./img/lampada_off.png");
        btn.innerHTML = "DESLIGADO";
    } else {
        adicionarAtributo("#img-lampada", "./img/lampada_on.png");
        btn.innerHTML = "LIGADO"
    }
}