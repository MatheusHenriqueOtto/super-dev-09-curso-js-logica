function exemplo01(){
    //prompt permite interação com o usuario

    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");

    let nomeCompleto = nome + " " + sobrenome;

    alert("Nome completo: " + nomeCompleto);
}

function coversaoStrParaInt(){
    let numero1 = parseInt("8");
    let numero2 = parseInt('12');

    let soma = numero1 + numero2;
    alert("Soma: " + soma)

}

function coversaoStrParaIntAlt(){
    let numero1 = parseInt(prompt("Digite um numero: "));
    let numero2 = parseInt(prompt("Digite um numero: "));

    let soma = numero1 + numero2;
    alert("Soma: " + soma)
    
}

function conversaoIntParaFloat(){
    let quantidadeHoras = parseFloat(prompt("Digite a quantidade de horas Trabalhas"));
    let valorHora = parseFloat(prompt("Digite o valor hora"));

    let salarioBruto = quantidadeHoras + valorHora;
    alert(
        "\nQuantidade de Horas: " + quantidadeHoras +
        "\nValor da hora: " + valorHora +
        "\nSalario Bruto: " + salarioBruto);
}

function exeemplo02(){
    let nome = parseInt(prompt("Digite o nome do atleta"));
    let peso = parseFloat(prompt("Diite o peso do atleta"));
    let imc = peso / altura**2;
    alert("Atleta: " + nome + "tem imc " + imc)
}

function exemplo03(){
    let anoNascimento = parceInt(prompt("Digite seu ano de nascimento"))
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    alert("Idade: " + idade)
}

function exemplo04(){
    let modelo = prompt("Informe o modelo do carro");
    let ano = perseInt(prompt("Informe ano do carro"));
    let velocidadeMaxima = perseInt(prompt("Informe velocidade maxiama do carro"));
    let tempoViagem = perseInt(prompt("Informe as horas de viagem"));
    let distancia = velocidadeMaxima * tempoViagem;

    alert(
        "Carro: " + modelo +
        "\nAno: " + ano +
        "\nDistacia estimada: " + distancia + "Km");

}
