//-----------------------------------------------------------------Exemplo 1-----------------------------------------------------------
//global
let nome = "";
let quantidade = 0;
let preco = 0.0;
let total = 0.0;

function comprarProduto(){
    solicitarDados();
    calcularTotal();
    calcularTotal();

}

function solicitarDados(){
    //utilizar variavel global
    nome = prompt("Digite o nome");
    quantidade = parseInt(prompt("Digite a quantidade"));
    preco = parseFloat(prompt("Digite o preco"));
}

function apresentarDados(){
    alert("Nome: " + nome + "\nQuantidade: " + quantidade + "\nPreco total: " + total);
}

function calcularTotal(){
    total = quantidade * preco;
}
//-----------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------Exemplo-2-----------------------------------------------------------