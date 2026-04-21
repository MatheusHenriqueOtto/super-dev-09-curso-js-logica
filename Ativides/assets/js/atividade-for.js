function exercicio01MostrarNumeros() {
    for (let indice = 1; indice < 6; indice = indice + 1) {
        console.log(indice)
    }
}

function exercicio02MostrarNomeVariasVezes() {
    let nome = prompt("Digite seu nome: ").trim();

    for (let indice = 0; indice < 3; indice = indice + 1) {
        console.log("Seu nome é: " + nome)
    }
}

function exercicio03ContarAteDez() {
    for (let indice = 1; indice < 10; indice = indice + 1) {
        console.log(indice)
    }
}

function exercicio04ContarRegressivo() {
    for (indice = 10; indice > 0; indice = indice - 1) {
        console.log(indice);
    }
}

function exercicio05MostrarNumeros() {
    let soma = 0;
    for (let indice = 1; indice < 6; indice = indice + 1) {
        soma = soma + indice;
    }
    alert("Resultado da soma é: " + soma)
}

function exercicio06MostrarNumerosPares() {
    let quantidadePares = 0;
    for (let indice = 0; indice <= 10; indice = indice + 1) {
        if (indice % 2 === 0){
            console.log("Numero par: " + indice);
            quantidadePares = quantidadePares + 1;
        }
    }
}

function exercicio07MostrarNumerosImpares(){
    for (let indice = 0; indice <= 9; indice = indice + 1){
        if (indice % 2 !== 0){
            console.Log("Numeros Impar: " + indice);
        }
    }
}

function exercicio08SolicitarTresNomes(){
    for (let indice = 0; indice < 3; indice = indice + 1){
        let nome  = prompt("Digite um nome: ");
        console.log(nome);
    }
}

function exercicio09SomarTresIdades(){
    let somaIdades = 0;
    for (let indice = 0; indice < 3; indice = indice + 1){
        let idade = parseInt(prompt("Digite uma idade: "));
        somaIdades = somaIdades + idade;
    }
    console.log(somaIdades);
}

function exercicio10CalcularMediaSimples(){
    let mediaNotas = 0;
    for (let indice = 0; indice < 4; indice = indice + 1){
        let nota = parseInt(prompt("Digite a nota: "));
        mediaNotas = mediaNotas + nota;
    }
    mediaNotas = mediaNotas/4;
    console.log(mediaNotas);
}

function exercicio11ContarMaioresDeIdade(){
    let quantidadeMaiorDezoito = 0;
    for (let indice = 0; indice > 5; indice = indice + 1){
        let idade = parseInt(prompt("Digite a idade: "));
        if (idade >= 18){
            quantidadeMaiorDezoito = quantidadeMaiorDezoito + 1
        }
    }
    console.log("Pessoas maiores de dezoito ou igual: " + quantidadeMaiorDezoito);
}

function exercicio12MostrarTabuada(){
    let numero = parseInt(prompt("Digite o numero: "));
    for (let indice = 0; indice < 11; indice = indice + 1){
        let multiplicacao = numero * indice;
        console.log( indice + " x " + numero + "= " + multiplicacao);
    }
}

function exexercicio13ContarLetrasNomes(){
    for (let indice = 0; indice < 4; indice = indice + 1){
        let nome = prompt("Digite um nome: ");
        console.log("Nome: " + nome + "Quantidade de letras: " + nome.length)
    }
}

function 

