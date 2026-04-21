function exercicio01SolicitarDadosMedicos() {
    let indice = 0;
    while (indice < 5) {

        let nome = prompt("Digite seu nome")
        let crm = parseInt(prompt("Dgite qual seu crm"))
        indice = indice + 1;
    }
    alert("Obrigado por utilizar o sistema Hospitalar")

}

function exercicio02SolicitarDadosPacientes() {
    let indice = 0;
    let nome = "";
    let idade = 0;
    let numeroPascientesTotal = 0;
    while (indice < 4) {
        nome = prompt("Digite seu nome");
        idade = parseInt(prompt("Digite sua idade"));
        indice = indice + 1;
        numeroPascientesTotal = indice + 1;
    }
    alert("Ao totatal " + numeroPascientesTotal + " foram cadastrados");
}

function exercicio03SomarIdadesPascientes() {
    let indice = 0;
    let nome = "";
    let idade = 0;
    let somaIdades = 0;
    while (indice < 6) {
        nome = prompt("Digite o nome do pasciente");
        idade = parseInt(prompt("Digite a idade do pasciente"));
        somaIdades = somaIdades + idade;
        indice = indice + 1;
    }
    alert("A idade de todos os pascientes somados é: " + somaIdades)
}

function exercicio04CalcularMediaIdades() {
    let indice = 0;
    let idade = 0;
    let somaIdades = 0;
    let quantidadePascientes = 0;

    while (indice < 5) {
        idade = parseInt(prompt("Digite a idade"));
        somaIdades = somaIdades + idade;
        quantidadePascientes = indice + 1;
        indice = indice + 1;
    }

    let mediaIdades = somaIdades / quantidadePascientes;
    alert("A media de idade dos pascientes é: " + mediaIdades)
}

function exeercicio05ContadorMaioresIdade() {
    let indice = 0;
    let nome = "";
    let idade = 0;
    let maioresIdade = 0;

    while (indice < 7) {
        nome = prompt("Digite o nome do pasciente")
        idade = parseInt(prompt("Digite a idade"));

        if (idade >= 18) {
            maioresIdade = maioresIdade + 1;
        }
        indice = indice + 1;
    }

    alert(maioresIdade + " pascientes são maiores de idade");
}

function exercicio06ValidarCRM() {
    let indice = 0;
    let nome = "";
    let crm = 0;

    while (indice < 5) {
        nome = prompt("Digite seu nome").trim();
        crm = parseInt(prompt("Digite o seu CRM")).trim();

        while (crm === "") {
            crm = parseInt(prompt("Digite o seu CRM"));
        }
    }
    alert("Cadastro de medicos realizados")
}

function exercicio07SolicitarPressaoArterial() {
    let indice = 0;
    let pressaoPasciente = 0;
    let pascientesHipertensao = 0;

    while (indice < 6) {
        pressaoPasciente = parseInt(prompt("Digite a pressao arterial do pasciente")).trim()

        if (pressaoPasciente < 1.5) {
            pascientesHipertensao = pascientesHipertensao + 1
        }


        indice = indice + 1;
    }

    alert("Tem " + pascientesHipertensao + "com Hipertenção(Pressão acima de 14)")
}

function exercicio08MenuContinuarCadastro() {
    let nome = "";
    let querContinuar = true;
    let pascienteCadastrados = 0;

    while (querContinuar == true) {
        nome = prompt("Digite o nome do pasciente");
        querContinuar = confirm("Quer continuar a cadastrar");
        pascienteCadastrados = pascienteCadastrados + 1;

    }
    alert("Obrigado por cadastrar!\n Cadastrados: " + pascienteCadastrados);
}

function exercicio09SomarFrequenciaCardiaca() {
    let frequenciaCardiaca = 1;
    let somaFrequencia = 0;

    while (frequenciaCardiaca > 0) {
        frequenciaCardiaca = parseInt(prompt("Digite a frequência"));
        somaFrequencia = frequenciaCardiaca + somaFrequencia;
    }
    alert("A soma total da frequencias: " + somaFrequencia);
}

function exercicio10MaiorTemperatura() {
    let indice = 0;
    let pascienteTemperatura = 0;
    let maiorTemperatura = 0;

    while (indice < 5) {
        pascienteTemperatura = parseFloat(prompt("Digite a temperatura do pasciente"));
        if (pascienteTemperatura > maiorTemperatura) {
            maiorTemperatura = pascienteTemperatura;
        }
    }
    alert("A maior temperatura foi de: " + maiorTemperatura);
}


