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