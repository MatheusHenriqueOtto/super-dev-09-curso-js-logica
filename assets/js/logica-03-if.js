function exemploBasico(){
    let numero = 2;

    if (numero === 1){
        //Fazer alguma coisa
        alert("Um");
    }
    else{
        alert("Outro Numero");
    }
}

function exemploBasico02(){
    let idade = perseInt(prompt("Informe sua idade"))

    if (idade < 18){ 
        alert("Menor de idade")
    }
    else if (idade < 60){
        alert("Adulto")
    }
    else {
        alert("idoso")
    }
}

function exemploBasico03(){
    let numero = perseInt(prompt("Digite um numero"));

    if (numero < 0){
        alert("Numero negativo");
    }
    else if (numero > 0){
        alert("Numero positivo");
    }
    else{
        alert("Numero neutro");
    }
}

function exemploProduto(){
    let produto = prompt("Digite o produto")
    let quantidade = perseInt(prompt("Digite a quantidade"))
    let precoUnitario = 0

    if (produto === "Maçã"){
        precoUnitario = 0.80;
    } else if (produto === "Pera"){
        precoUnitario = 1.20;
    } else if (produto == "Laranja"){
        precoUnitario = 2.50;
    } else if (produto === "Banana"){
        precoUnitario = 2;
    } else {
        alert("Produto não cadastrado");
        
        // encerrar a execução da função
            return;
    }

    let precoTotal = precoUnitario * quantidade; 

    alert(
        "Produto: " + produto +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitário: " + precoUnitario +
        "\nPreço total: " + precoTotal
    );
}

let regular = 0;
let bom = 0;
let otimo = 0;


function avaliacaoRegular(){
    regular = regular + 1;
}

function avaliacaoBom(){
    bom = bom + 1;
}

function avaliacaoOtimo(){
    otimo = otimo + 1;
}

function avaliacaoFinalizar(){
    alert("Avaliações: " + "\nRegualr: " + regular + "\nBom: " + bom + "\nOtimo: " + otimo)
    regular = 0
    bom = 0
    otimo = 0
}

function exemploOperadorE() {
    let idade = parseInt(prompt("Digite a idade: "))
  
    // 0, 1, 2, 3, 4... 17

    if ((idade >= 0) && (idade <= 17)) {
      alert("Criança ou adolescente")
    } else if (idade >= 18) {
      alert("adulto")
    } else {
      alert("idade inválida")
    }
  }

function  exemploOperadorOu(){
    let transport = prompt("digite o meio para viajar");

    if ((transport === "moto") || (transport === "carro")){
        alert("Viajar de boas")
    } else {
        alert("Não vamos viajar");
    }
}

function exemploLoja(){
    let nome1 = prompt("Digite o nome do jogo 1");
    let categoria1 = prompt("Digite a categoria: ");
    let precoBase1 = 399.99;
    
    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1 = 0;

    if ((categoria1 === "moba") || (categoria1 === "fps")){
        percentualDesconto1 = 0.10;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - percentualDEsconto1;
    } else if ((categoria1 === "aventura") || (categoria1 === "rpg")) {
        percentualDesconto1 = 0.15;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1; 
    } else if ((categoria1 === "roquelike") || (categoria1 === "soulslike")){
        percentualDesconto1 = 0.20;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }

    let nome2 = prompt("digite o nome do jogo 2");
    let categoria2 = prompt("Digite a categoria do jogo");
    let precoBase2 = 190.00;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0;

    if ((categoria2 === "moba") || (categoria2 === "fps")){
        percentualDesconto2 = 0.10;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2; 
    } else if ((categoria2 === "aventura")||(categoria2 === "rpg")){
        percentualDesconto2 = 0.15;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "roquelike") || (categoria2 === "soulslike")){
        percentualDesconto2 = 0.20;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    }

    alert(
        "Nome: " + nome1 +
        "\nCategoria: " + categoria1 +
        "\nPreço: R$" + precoBase1 +
        "\nDesconto: " + percentualDesconto1 * 100 + "%" +
        "\nPreço com desconto: R$" + precoComDesconto1.toFixed(2) +

        "\n" + 
        "\nNome: " + nome2 +
        "\nCategoria: " + categoria2 +
        "\nPreço: R$" + precoBase2 + 
        "\nDesconto: " + percentualDesconto2 * 100 + "%" +
        "\nPreço co desconto: R$" + precoComDesconto2.toFixed(2)
    )
}


