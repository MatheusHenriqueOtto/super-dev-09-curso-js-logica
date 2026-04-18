
function descobrirQuantidade() {
    // solicitar nome, idade de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0
    let quantidadeMenoresIdade = 0;
    while (indice < 3) {
        let nome = prompt("digite o nome: ");
        let idade = parseInt(prompt("Digite a idade"));
        if (idade <= 17) {
            // Incrementar a variavel quantidadeMenoresIdade em 1
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }
        indice = indice + 1;
    }
    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}
function descobrirMaiorAltura() {
    // descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;
    while (indice < 4) {
        let altura = parseFloat(prompt("digite a altura").replace(",", ".")); //2
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1
    }
    alert("maior Altura" + maiorAltura);
}
function descobrirMenorVitorias() {
    let indice = 0;
    let menorQuantidadeVitorias = 9999999;
    while (indice < 3) {
        let personagem = prompt("digite o nick")
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));
        if (quantidadeVitorias < menorQuantidadeVitorias) {
            menorQuantidadeVitorias = quantidadeVitorias;
        }
        indice = indice + 1;
    }
    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias);
}
function descobrirColaboradorComBonificacaoSalario() {
    let indice = 0;
    let maiorBonificacao = 0;
    let colaborarMaiorBonificacao = "";
    while (indice < 3) {
        let colaborador = prompt("Digite o nome do colab");
        let bonificacao = parseFloat(prompt("digite o valorar da bonificação "));
        if (bonificacao > maiorBonificacao) {
            maiorBonificacao = bonificacao;
        }
        colaborarMaiorBonificacao = colaborador;
        indice = indice + 1
    }
    alert(colaborarMaiorBonificacao + " tem a maior bonificação " + maiorBonificacao);
}
function descobrirMenorNome() {
    let indice = 0;
    let menorNome = "wertyuikjhgvcdswertyuikjbvcdrtyuikmnbvfrtyumnbvcxsdfghjkjhgfdsdfghjkl"
    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));
    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome").trim();
        if (nome.length < menorNome.length) {
            menorNome = nome;
        }
        indice = indice + 1;
    }
    alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length);
}
function repetirEnquantoUsuarioDesejaContinuar() {
    let desejaContinuar = "";
    alert("Bem vindo ao sistema de cadastro de fila de atendimento do sos")
    while (desejaContinuar != "não") {
        let nomePaciente = prompt("digite o nome do paciente");
        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLocaleLowerCase();
    }
}
function repetirEnquantoUsuarioDesejaContinuarComComfirm() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;
    alert("Bem vindo ao sistema de cadastro de fila de atendimento do sos");
    while (desejaContinuar != false) {
        let nomePaciente = prompt("digite o nome do paciente");
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
        desejaContinuar = confirm("Deseja continuar?")
    }
    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}

function exemploValido(){
    let indice = 0;

    while(indice < 3){
        let nome = prompt("Digite o nome").trim();
        while ((nome.length < 2) || (nome.length > 20)){
            nome = prompt("Nome invalido; deve conter no minimo 2 e no maximo 20\ndigite o nome").trim();

        }

        let idade = parseInt(promt("digite a idade"));
        while ((idade > 16) || (idade < 100)){
            idade = parseInt(prompt("idade invalida, deve conter no minimo desseseis e no maximo até 100"));
        }
        indice = indice + 1;
    }
}