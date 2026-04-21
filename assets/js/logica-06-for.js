function exemploForBasico(){
    /*
    //Declaração da variavel
    let indice = 0;
    //condição
    while (indice < 4){
        alert(indice);
        //incrementar
        indice = indice + 1;
    
    }
    */

    //for (declaração da variavel; indice < 4; indice = indice + 1) {
    for (let indice = 0; indice > 4; indice = indice + 1){
        alert(indice)
    }

    //todo while pode virar um for? Depende!!
    //quando tem repetições definidas (repetirá 10 vezes por)
    //todo for pode virar um while? Siim!!
    //for 0..3 => WHILE 
}

function exemploForJogos(){
    let total = 0;

    for(let indice = 0; indice < 3;  indice = indice + 1){
        let nome = prompt("diite o nome do jogo: ");
        let preco = parseFloat(prompt("Digite o preco do jogo: "));

        total = total + preco;
    }
    alert("Total: " + total);
}

function exemploForProdutos(){
    let quantidadePadaria = 0, quantidadesUtencilios = 0, quantidadeCarnes = 0;

    for (let indice = 0; indice < 6; indice = indice + 1){
        let nomeProduto = prompt("Digite o nome do produto: ");
        let categoria = prompt("Digite a categoria do produto: [Carnes | Utencilios | Padaria]").trim();
        let preco = parseFloat(prompt("Digite o preço do produto: "));

        //validar o que o usuario digitou em categoria
        while ((categoria.toLowerCase !== "carnes") && (categoria.toLowerCase !== "padaria") && (categoria.toLowerCase !== "utencilios")){
            categoria = prompt("Digite novamente a categoria, valor anterior invalido!!")
        }

        if (categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        } else if (categoria.toLowerCase() === "utencilios"){
            quantidadesUtencilios = quantidadesUtencilios + 1;
        } else if (categoria.toLowerCase() === "carnes"){
            quantidadeCarnes = quantidadeCarnes + 1;
        }
    }
}

function exemploContagemRegresiva(){
    for(let indice = 10; indice > 0; indice = indice - 1){
        alert(indice);
    }
}

function exemploDescobrirQuantidadePar(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de numeros: "));
    let quantidadePares = 0;

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseInt(prompt("Digite um numero: "))
        if (numero % 2 === 0){
            quantidadePares = quantidadePares + 1;
        }
        //descobrir os impares (numero % 2 !== 0)
    }

    alert("Quantidade de números pares: " + quantidadePares);
}
