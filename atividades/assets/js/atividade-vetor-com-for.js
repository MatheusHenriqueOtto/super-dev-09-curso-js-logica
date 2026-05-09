function exercicio01() {
    let nomes = [];

    for (let i = 0; i < 3; i += 1) {
        let nome = prompt("Digite um nome");
        nomes.push(nome);
    }

    let texto = ("Nomes no vetor: \n");
    for (let i = 0; i < 3; i += 1) {
        texto = (texto + nomes[i] + "\n")
    }
    alert(texto);
}

function exercicio02() {
    let idades = [];

    for (let i = 0; i < 4; i += 1) {
        let idade = parseInt(prompt("Digite a idade"));
        idades.push(idade);
    }

    console.log("Idades armazenadas no vetor: \n");
    for (let i = 0; i < 4; i += 1) {
        console.log(idades[i]);
    }
}

function exercicio03(){
    let cidades = [];
    let texto = ("Cidades cadastradas: \n");
    for (let i = 0; i < 5; i += 1){
        let cidade = prompt("Digite uma cidade");
        cidades.push(cidade)
    }
    
    for(let i = 0; i < 5; i += 1){
        texto = texto + "\n" + cidades[i];
    }

    console.log(texto)
}

function exercicio04(){
    let numeros = [];
    let somaNumeros = 0;

    for (let i = 0; i < 5; i += 1){
        let numero = parseInt(prompt("Digite um numero"));
        numeros.push(numero);
    }

    for (let i = 0; i < 5; i += 1){
        somaNumeros = somaNumeros + numeros[i];
    }

    console.log("A soma dos numeros do vetor é igual: " + somaNumeros);
}

function exercicio05(){
    let notas = [];
    let somaNotas = 0;
    let media = 0;
    for(let i  = 0; i < 4; i += 1){
        let nota = parseInt(Prompt("Digite uma nota"));
        notas.push(nota);
    }

    for (let i = 0; i < 4; i += 1){
        somaNotas = somaNotas + notas[i];
        media = somaNotas / i;
    }
    console.log("A media é: " + media);
}

function exercicio06(){
    let produtos = [];
    for (let i = 0; i < 4; i += 1){
        let produto = prompt("Digite um nome de um produto");
        produtos.push(produto);
    }
    let texto = "Produtos do vetor \n"; 
    for (let i = 0; i < 5; i += 1){
        texto = texto + "\n" + produtos[i];
    }
    console.log(texto);

    produtos[2] = prompt("Digite outro produto");

    for (let i = 0; i < 5; i += 1){
        texto = texto + "\n" + produtos[i];
    }
    console.log(texto);
}

function exercicio07(){
    let temperaturas = [];
    let maiorTemperatura = 0;
    for (let i = 0; i < 5; i += 1){
        let temperatura = parseFloat(prompt("Digite uma temperatura"));
        temperaturas.push(temperatura);
    }

    for (let i = 0; i < 5; i += 1){
        let temperatura = temperaturas[i];
        if (maiorTemperatura < temperatura){
            maiorTemperatura = temperatura;
        }
    }

    console.log("A maior temperatura é: " + maiorTemperatura);
}

function exercicio08(){
    let precos = [];
    let menorPreco = 99999999999999999999999999999999999999 ;
    for (let i = 0; i < 4; i += 1){
        let preco = parseFloat(prompt("Digite o preço"));
        precos.push(preco);
    }

    for ( let i = 0; i < 4; i += 1){
        let preco = precos[i];
        if (preco < menorPreco){
            menorPreco = preco;
        }
    }

    console.log("Este é o menor preço: " + menorPreco);
}

function exercicio09(){
    let numeros = [];
    for (let i = 0; i < 6; i += 1){
        let numero = parseInt(prompt("Digite um numero"));
        numeros.push(numero);
    }

    for (let i = 0; i < 6; i += 1){
        if (i < 0){
            console.log(i)
        }
    }
}
