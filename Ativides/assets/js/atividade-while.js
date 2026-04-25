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
    let pascienteTemperatura = 0; //Descobri que é ma pratica colocar todas as variaveis no escopo principal da função, mas criar no while principalmente nesses cassos //
    let maiorTemperatura = 0;

    while (indice < 5) {
        pascienteTemperatura = parseFloat(prompt("Digite a temperatura do pasciente"));
        if (pascienteTemperatura > maiorTemperatura) {
            maiorTemperatura = pascienteTemperatura;
        }
    }
    alert("A maior temperatura foi de: " + maiorTemperatura);
}

function exercicio11MenorTemperatura(){
    let menorTemperatura = 9999999;
    let index = 0;

    while (index < 5){
        let temperaturaPasciente = parseFloat(prompt("Digite qual a temperatura do pasciente e Cº: "));
        if (temperatura < menorTemperatura){
            menorTemperatura = temperatura;
        }

        index = index + 1;
    }
    alert("A menor temperatura entre os pascientes é: " + menorTemperatura);
}

function exercicio12ContarSintomas(){
    let quantosComFebre = 0;
    let index = 0;

    while (index < 5){
        let nome = prompt("Digite o nome do pasciente: ").trim();
        let pascienteComFebre = prompt("Digite se o pasciente está com febre: \nResponda: [ sim | não ]").trim();
        if (pascienteComFebre.toLowerCase() === "sim"){
            quantosComFebre = quantosComFebre + 1;
        }
    }
    alert(quantosComFebre + " pascientes tem febre.");
}

function exercicio13SepararPacientesPorIdade(){
    let index = 0;
    let quantidadeCriancas = 0, quantidadeAdultos = 0, quantidadeAdolescentes = 0;

    while (index < 8){
        let nomePasciente = prompt("digite o nome do pasciente: ");
        let idadePasciente = parseInt(prompt("Digite a idade do pasciente: "));

        if (idadePasciente < 12){
            quantidadeCriancas = quantidadeCriancas + 1;
        } else if ((idadePasciente > 12) && (idadePasciente <= 17)){
            quantidadeAdolescentes = quantidadeAdolescentes + 1;
        } else if (idadePasciente >= 18){
            quantidadeAdultos = quantidadeAdultos + 1;
        }
    }
    alert("Quantidade de pascientes adultos: " + quantidadeAdultos + "\nQuantideade de pascientes adolescente: " + quantidadeAdolescentes + "\nQuantidade de pascientes crianças: " + quantidadeCriancas);
}

function exercicio14ValidarOpcaoMenu(){
    let sair = false;

    while (sair === false){
         let menu = parseInt(prompt("Digite a opção do menu \n1 - Cadastrar pascientes \n2 - Cadastrar médico \n3 - Sair \nResponda: [ 1 | 2 | 3 ]")).trim();

         if (menu === 1){
            let nomePasciente = prompt("Digite o nome do pasciente: ");
            let idadePasciente = parseInt(prompt("Digite o idade do pasciente: "));
            let pesoPasciente = parseFloat(prompt("Digite o peso do pasciente: "));
            let alturaPasciente = parseFloat(prompt("Digite a altura do pasciente: "));
            alert("Cadastro de Pasciente realizado");
         } else if (menu === 2){
            let nomeMedico = prompt("Digite o nome do médico: ");
            let crmMedico = parseInt(prompt("Digite o cadastro unico do médico: "));
            let especialidadeMedico = prompt("Digite a esecialidade do medica: ");
            alert("Médico cadastrado");
         } else if (menu === 3){
            sair = true;
            alert("Sistema encerrado");
         } else {
            alert("Resposta invalida, digite uma resposta valida como: 1 (para entrar no cadastro de pasciente), ou digite: 2 (para entra no cadastro de medico), ou digite: 3 (para sair do sistema)")
         }
    }
}

function exercicio15RelatorioPacientes(){
    let index = 0; 
    let quantidadePascientes = 0, somaIdades = 0, maiorTemperatura = 0, menorTemperatura = 999, quantidadePascientesIdosos = 0;
    
    while (index > 5){
        let nomePasciente = prompt("Digite o nome do pasciente: ");
        let idadePasciente = parseInt(prompt("Digite a idade do pasciente: "));
        let temperaturaPasciente = parseFloat("Digite a temperatura do pasciente: ");

        quantidadePascientes = quantidadePascientes + 1;
        
        somaIdades = (somaIdades + idade)

        if (temperaturaPasciente < menorTemperatura){
            menorTemperatura = temperaturaPasciente;
        }

        if (temperaturaPasciente > maiorTemperatura){
            maiorTemperatura = temperaturaPasciente;
        }

        if (idade >= 60){
            quantidadePascientesIdosos = quantidadePascientesIdosos + 1;
        }
    }
    alert("Dos pascientes cadastrados: \n Quantidades de pascientes cadastrados: " + quantidadePascientes + " \nA media das idades foi: " + (somaIdades/quantidadePascientes) + " \nA menor foi: " + menorTemperatura + " \nA maior temperatura foi: " + quantidadePascientesIdosos);
}

function exercicio16SenhaAcessoSistema(){
    let continuarPedirSenha = true;
   
    while (continuarPedirSenha){
        let senha = prompt("Digite a senha: ");
        if (senha === "hospital123"){
            alert("Acesso liberado ao sistema hospitalar");
            continuarPedirSenha = false;
        } else {
            alert("Senha incoreeta, tente de novo");
        }
    }
}

function exercicio17CadastroComValidacaoCompleta(){
    let index = 0;
    let quantidadeCadastrados = index + 1;
    debugger
    while (index < 5){
        let nome = prompt("Digite o nome do médico: ").trim();
        while ((nome.length > 2) || (nome.length > 20)){
            nome = prompt("O nome tem que conter no minimo caracteresDigite um nome valido: ");
        }

        let crm = parseInt(prompt("Digite o CRM do médico: ")).trim();
        while ((crm <= 0) || (crm == null)){
            crm = parseInt(prompt("Digite um crm valido: "))
        }
        index = index + 1;
    }
    alert(quantidadeCadastrados + " Foram cadastrados com exito");
}

function exercicio18RelatorioFinalInternacoes(){
    let index = 0;
    let maiorDiasInternados = 0;
}