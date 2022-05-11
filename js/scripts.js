//console.log('MSG gerada no arquivo JS!')

//Declarando variáveis com var
//Utilizamos o var para criar um escopo global
//var nome = "Alê"

//Declarando variáveis com let
//Utilizamos o let para criar variáveis em um escopo local

//function exemploEscopoLocal(){
    //let sobrenome = "Carlos"
    //return sobrenome
//}

//console.log("Nome completo : " + nome + " " +exemploEscopoLocal)

//Criando constantes
//Para criar constantes utilizamos a palavra chave const
//Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS
//const elemento = document.querySelector("button")

//Acessando o elemento e alterando o texto
//elemento.innerHTML = "Alterando o texto do elemento"

//Utilizamos a função querySelectorAll para selecionar todos os elementos HTML com seletores CSS
//const elementos = document.querySelectorAll("a")

//Acessando um elemento específico da lista de elementos
//const elemento2 = elementos[3]

//alterando o texto do elemento
//elemento2.innerHTML = "Alterando o texto do elemento"

//Acessando o valor do atributo href do elemento
//console.log(elemento2.getAttribute("href"))
//console.table(elementos)

//Vetores / Arrays
//var frutas = ["Banana", "Maça", "Uva"]

//Acessando um elemento específico do vetor
//console.log(frutas[1])

//Adicionando um elemento ao vetor
//frutas.push("Melão")

//Acessando o elemento do vetor que foi adicionado
//console.log(frutas[3])

//Removendo um elemento do vetor
//frutas.pop() 

//Acessando o tamanho do vetor
//console.log(frutas.length)

//Removendo um elemento do início do vetor
//frutas.shift()
//console.log(frutas[0])

//Imprimindo todos os elementos do vetor
//console.log(frutas)

//Console.table imprime o vetor como uma tabela
//console.table(frutas)

//Loop for para percorrer o vetor
//for(let i = 0; i < frutas.length; i++){
    //console.log("Valor de i: " + frutas[i])
//}

//Loop forof para percorrer o vetor
//O FOR OF RECEBE UM OBJETO E PERCORRE OS ELEMENTOS DO OBJETO
//O FOR OF RETORNA O VALOR DO ELEMENTO
//var carros = ["Fusca" , "Gol", "Palio", "Uno"]
//for(let carro of carros){
   // console.log("Valor de fruta: " + carro)
//}

//Loop forin para percorrer o vetor
//O FOR IN RETORNARÁ O ÍNDICE DO VETOR
//var verduras = ["Batata", "Cenoura", "Cebola"]
//for(let verdura in verduras){
    //console.log("Valor de verdura: " + verduras[verdura])
//}

//Atrelando um evento de mouse ao elemento, utilizando um EventListener
//Seria algo como escutador de eventos.
//Ele recebe como parâmetros(Evento, função)
//elementoInput.addEventListener("click",function(){

    //alert('TESTE')
//})

//Hoisting 
//Elevação de variáveis e funções
//soma()
//nr1 = 10
//console.log(nr1)

//Exemplo de uma função básica
//function soma(){
    //Declarando variáveis
    //let numero1 = 10
    //let numero2 = 20
    //let resultado = numero1 + numero2
    //console.log(resultado)
    //selecionando um elemento HTML e alterando o texto
    //document.querySelector("button").innerHTML = resultado
//}

//Exemplo de uma função com parâmetros
//function soma(numero1, numero2){
    //Declarando variáveis
    //let resultado = (parseInt(numero1)) + (parseInt(numero2))
    //console.log(resultado)
    //selecionando um elemento HTML e alterando o texto
    //document.querySelector("button").innerHTML = resultado
//}

//soma("15","15")

//Exemplo de uma função com parâmetros
//function soma(numero1, numero2){
    //Declarando variáveis
    //let resultado = (parseInt(numero1)) + (parseInt(numero2))
    //console.log(resultado)
    //selecionando um elemento HTML e alterando o texto
    //com querySelectorAll
    //const links = document.querySelectorAll("a")
    //console.log(links)
//}
//soma("15","15")

//Exemplo de uma função com parâmetros
//function processandoElemento(elemento){
    //declarando constante
    //const elementoSelecionado = document.querySelectorAll(elemento)
    
    //Alterando o estilo dos elementos
    //for(let i = 0; i < elementoSelecionado.length; i++){
       // elementoSelecionado[i].style.backgroundColor = cor
    //}
    
    //imprimindo o elemento selecionado com console.log
    //console.log(elementoSelecionado)
//}
   //Executa a função com o parâmetro processandoElemento
   //passando o paramêtro para a função
   //processandoElemento("div ul li", "#ffff")

   //Exemplo de uma função que adiciona atributos a um elemento
    function adicionarAtributo(elemento, atributo, valor){
    //Declarando constante
    const elementoSelecionado = document.querySelectorAll(elemento)
    console.log(elementoSelecionado)
    for(let i = 0; i < elementoSelecionado.length; i++){
    elementoSelecionado[i].atributo = valor
    }
    elementoSelecionado[Math.round(Math.random()+1)].src = valor
}
    //Executa a função com o parâmetro adicionarAtributo
    //Passando o parâmetro para a função
    adicionarAtributo("div ul li img","./img/github.png")
    
    
    //Exercício da Lâmpada
//Crie um programa que simule a luz de uma lâmpada.
/*
    1. Crie 2 botões, um para ligar e outro para desligar a lâmpada.
    2. Crie uma div e adicione um elemento img com o id "img-lampada"
    3. Crie um evento para o botão ligar, que adicione o atributo src da imagem com o valor "img/lampada-acesa.png"
    4. Crie um evento para o botão desligar, que adicione o atributo src da imagem com o valor "img/lampada-apagada.png" */