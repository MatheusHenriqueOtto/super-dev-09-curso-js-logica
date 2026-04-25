function exercicio01MostrarNumeros() {
    for (let indice = 1; indice < 6; indice = indice + 1) {
        console.log(indice)
    }
}

function exercicio02MostrarNomeVariasVezes() {
    let nome = prompt("Digite seu nome: ");

    for (let indice = 0; indice < 3; indice = indice + 1) {
        console.log("Seu nome é: " + nome.trim())
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
        if (indice % 2 === 0) {
            console.log("Numero par: " + indice);
            quantidadePares = quantidadePares + 1;
        }
    }
}

function exercicio07MostrarNumerosImpares() {
    for (let indice = 0; indice <= 9; indice = indice + 1) {
        if (indice % 2 !== 0) {
            console.Log("Numeros Impar: " + indice);
        }
    }
}

function exercicio08SolicitarTresNomes() {
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite um nome: ");
        console.log(nome);
    }
}

function exercicio09SomarTresIdades() {
    let somaIdades = 0;
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let idade = parseInt(prompt("Digite uma idade: "));
        somaIdades = somaIdades + idade;
    }
    console.log(somaIdades);
}

function exercicio10CalcularMediaSimples() {
    let mediaNotas = 0;
    for (let indice = 0; indice < 4; indice = indice + 1) {
        let nota = parseInt(prompt("Digite a nota: "));
        mediaNotas = mediaNotas + nota;
    }
    mediaNotas = mediaNotas / 4;
    console.log(mediaNotas);
}

function exercicio11ContarMaioresDeIdade() {
    let quantidadeMaiorDezoito = 0;
    for (let indice = 0; indice < 5; indice = indice + 1) {
        let idade = parseInt(prompt("Digite a idade: "));
        if (idade >= 18) {
            quantidadeMaiorDezoito = quantidadeMaiorDezoito + 1
        }
    }
    console.log("Pessoas maiores de dezoito ou igual: " + quantidadeMaiorDezoito);
}

function exercicio12MostrarTabuada() {
    let numero = parseInt(prompt("Digite o numero: "));
    for (let indice = 0; indice < 11; indice = indice + 1) {
        let multiplicacao = numero * indice;
        console.log(indice + " x " + numero + "= " + multiplicacao);
    }
}

function exexercicio13ContarLetrasNomes() {
    for (let indice = 0; indice < 4; indice = indice + 1) {
        let nome = prompt("Digite um nome: ");
        console.log("Nome: " + nome + "Quantidade de letras: " + nome.length)
    }
}

function exercicio14MaiorNumero() {
    let maiorNumero = 0;
    for (let indice = 0; indice < 5; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    console.log("Maior numero: " + maiorNumero);
}

function exercicio15MenorNumero() {
    let menorNumero = 999999;
    for (let indice = 0; indice < 5; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (menorNumero > numero) {
            menorNumero = numero;
        }
    }
    console.log('Menor numero: ' + menorNumero);
}

function exercicio16ContarPositivos() {
    let quantidadePositivos = 0;
    for (let indice = 0; indice < 6; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero > 0) {
            quantidadePositivos = quantidadePositivos + 1;
        }
    }
    console.log("Quantidade de numeros positivos" + quantidadePositivos);
}

function exercicio17SomarPares() {
    let somaNumerosPares = 0;
    for (let indice = 0; indice < 5; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero % 2 === 0) {
            somaNumerosPares = somaNumerosPares + numero;
        }
    }
    console.log("Soma dos pares: " + somaNumerosPares);
}

function exercicio18MostrarMultiplosDeTres() {
    for (let indice = 1; indice < 10; indice = indice + 1) {
        let multiplo = indice * 3;
        console.log(multiplo);
    }
    console.log("Esses são os multiplos de três, entre 1 e 30")
}

function exercicio19CadastrarProdutos() {
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nomeProduto = prompt("Cadastre um produto");
    }
    console.log("Cadastro concluido com sucesso!");
}

function exercicio20RelatorioSimples() {
    let quantidadePessoas = 0, somaIdades = 0, mediaIdades = 0;
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite o nome da pessoa: ");
        let idade = parseInt(prompt("digite a idade da pessoa: "));
        quantidadePessoas = quantidadePessoas + 1;
        somaIdades = somaIdades + idade;
        mediaIdades = somaIdades / quantidadePessoas;
    }
    console.log("Quantas pessoa foram cadastradas: " + quantidadePessoas + "\nA soma de todas as idades é: " + somaIdades + "\nA media das idades é: " + mediaIdades);
}

function exercicio21MostrarNumerosParesIntervalo() {
    let inicio = parseInt(prompt("Digite o inicio"));
    let final = parseInt(prompt("Digite o final"));
    for (let indice = inicio + 1; indice < final; indice = indice + 1) {
        if (indice % 2 === 0) {
            console.log(indice)
        }
    }
    console.log("No intervalo, esses são os numero parres!!")
}

function exercicio22SomarNumerosIntervalo() {
    let inicio = parseInt(prompt("Digite o inicio: ")), final = parseInt(prompt("Digite o final: ")), somaNumerosIntervalo = 0;
    for (indice = inicio + 1; indice < final; indice = indice + 1) {
        somaNumerosIntervalo = somaNumerosIntervalo + indice;
    }
    console.log("A soma dos numeros do intervalo é: " + somaNumerosIntervalo);
}

function exercicio23ContarNumerosNegativos() {
    let quantidadeNegativos = 0;
    for (let indice = 0; indice < 6; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero < 0) {
            quantidadeNegativos = quantidadeNegativos + 1;
        }
    }
    console.log(quantidadeNegativos + "do/s numeros que vc digitou são negativos");
}

function exercicio24CalcularMediaAlturas() {
    let somaAlturas = 0, mediaAlturas = 0;
    for (let indice = 0; indice < 5; indice += 1) {
        let altura = parseInt(prompt("Digite a altura"));
        somaAlturas = somaAlturas + altura;
        mediaAlturas = somaAlturas / (indice + 1)
    }
    console.log("A media das alturas é: " + mediaAlturas);
}

function exercicio25ContarNotasAcimaSete() {
    let quantidadeAcimaSete = 0;
    for (let indice = 0; indice < 8; indice += 1) {
        let nota = parseInt(prompt("Digite a primeira nota: "));
        if (nota >= 7) {
            quantidadeAcimaSete = quantidadeAcimaSete + 1
        }
    }
    console.log("Notas acima ou igual sete: ");
}

function exercicio26MaiorEMenorNumero() {
    let maiorNumero = 0, menorNumero = 0;
    for (let indice = 0; indice < 7; indice += 1) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero < menorNumero) {
            menorNumero = numero;
        }
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    console.log("Menor: " + menorNumero + "\nMaior: " + maiorNumero);
}

function exercicio27SomarIdadesMaioresDeIdade() {
    let somaIdades = 0;
    for (let indice = 0; indice < 5; indice += 1){
        let nome = prompt("Digite o nome: "), idade = parseInt(prompt("Digite a idade: "));
        if (idade >= 18){
            somaIdades = somaIdades + idade;
        }
    }
    console.log("Soma das idades das pessoas que são de maiores de idade: " + somaIdades);
}

function exercicio28ContarHomensEMulheres(){
    let quantidadeMasculino = 0, quantidadeFeminino = 0;
    for (let indice = 0; indice < 6; indice += 1){
        let nome = prompt("Digite o nome: "), genero = prompt("Digite seu genero [ M | F ]");
        if (genero.toUpperCase() === "M"){
            quantidadeMasculino = quantidadeMasculino + 1;
        } else if (genero.toUpperCase() === "F"){
            quantidadeFeminino = quantidadeFeminino + 1;
        }
    }
    console.log("Quantidade de homens: " + quantidadeMasculino + "\nQuantidade de mulheres: " + quantidadeFeminino)
}


