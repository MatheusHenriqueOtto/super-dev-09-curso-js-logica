
function exercicioUm(){
    let nomePersona = "Deadpool";
    let anoNascimento = 1991;
    let anoAtual = 2026;
    let idadePersona = anoAtual-anoNascimento;
    let alturaPersona = 1.88;
    let pesoPersona = 95;
    let imcPersona = pesoPersona/(alturaPersona*alturaPersona);
    let categoriaPersona = "Anti-herói e Mercenário";
    let quantidadeJobsvida = 1000;//Trablhos durante toda sua carreira/vida //
    // parseInt(x-y)considera somente a parte inteira, retira tudo que vem apos ao ponto //
    let jobsAno = parseInt(quantidadeJobsvida/(idadePersona - 19));// -19 por que antes disso ele não era mercenário //
    let jobsMes = parseInt(jobsAno/12);//média de quantos trabalho por mês //
    let valorJob = 50000;
    let salarioPersona = parseInt(jobsMes*valorJob);

    alert(
        "Personagem Favorito" +
        "\nNome: " + nomePersona +
        "\nAno de Nascimento: " + anoNascimento +
        "\nIdade: " + idadePersona +
        "\nAltura: " + alturaPersona +
        "\nPeso: " + pesoPersona +
        "\nIMC: " + imcPersona.toFixed(2) +
        "\nCategoria: " + categoriaPersona +
        "\nTrabalhos na carreira: " + quantidadeJobsvida +
        "\nTrabalhos por ano: " + jobsAno +
        "\nTrabalos por mês: " + jobsMes +
        "\nPreço por trabalho: " + valorJob +
        "\nSalário mensal: " + salarioPersona
    );

} 

function exercicioDois(){
    let nomeAluno = "Matheus";
    let quantidadeNotas = 4;
    let notaUm = 4;
    let notaDois = 5;
    let notaTres = 8;
    let notaQuatro = 9;
    let mediaAluno = (notaUm+notaDois+notaTres+notaQuatro)/quantidadeNotas;

    alert(
        "Nome: " + nomeAluno +
        "\n1º nota: " + notaUm +
        "\n2º nota: " + notaDois +
        "\n3º nota: " + notaTres + 
        "\n4º nota: " + notaQuatro +
        "\nMedia do aluno: " + mediaAluno
    );

}

function exercicioTres(){
    let nomeProduto = "'Celular";
    let precoProduto = 2500;
    let quantidadeEstoque = 10;
    let precoEstoque = precoProduto*quantidadeEstoque;
    let descontoProduto = precoProduto - (precoProduto*10/100);//multiplico o valor pela pecentual desejado(Neste caso: 10) e divido por 100, dai eu chego no valor dos 10% //

    alert(
        "Nome: " + nomeProduto +
        "\nPreço: " + precoProduto +
        "\nQantidade no estoque: " + quantidadeEstoque +
        "\nValor parado no estoque: " + precoEstoque +
        "\nPreço do produto com desconto: " + descontoProduto
    );
}

function exercicioQuatro(){
    let nomeCarro = "Gol Cl";
    let anoCarro = 1994;
    let velocidadeMaxima = 160; //km por hora
    let tempoViagem = 4; //em horas
    let distaciaViagem = tempoViagem*velocidadeMaxima; //em km
    
    alert(
        "Carro: " + nomeCarro +
        "\nAno do carro: " + anoCarro +
        "\nVelocidade maxima: " + velocidadeMaxima +
        "\nEm " + tempoViagem + " horas de viagem o carro vai percorrer " + distaciaViagem + " kilometros na velocidade máxima."
    );
}

function exercicioCinco(){
    let nomeCidade = "Bombinhas";
    let populaçãoCidade = 25058;
    let areaCidade = 35.143;// em km²//
    let densidadeDemografica = populaçãoCidade/areaCidade; //em habitatantes/km²//
    
    alert(
        "Cidade: " + nomeCidade +
        "\nPopulação: " + populaçãoCidade + " habitantes" +
        "\nArea territorial: " + areaCidade + " km²" +
        "\nDensidade demografica: " + densidadeDemografica.toFixed(2) + " hab./km² "
    );

}

function exercicioSeis(){
    let nomeFilme = "Gente Grande 2";
    let duracaoFilme = 101; //em minutos//
    let clasificacaoFilme = 12; //em anos//
    let quantidadeAssistido = 3;
    
    alert(
        "Filme favorito" +
        "\nNome do filme: " + nomeFilme + "." +
        "\nDuração: " + duracaoFilme + "mim." +
        "\nClassificação: " + clasificacaoFilme + " anos." +
        "\nEu já assisti " + quantidadeAssistido + " vezes."
    ); 

}

function exercicioSete(){
    let nomeFuncionario = "Ronaldo";
    let salarioFuncionarioBase = 5000;
    let horasExtra = 10;
    let escalaFuncionario = 5; //Trabalha 5 dias e folga os outros 2 dias, na semana // 
    let horasDia = 8;
    let horasSemana = horasDia*escalaFuncionario;
    let semanasTrabalhadas = 4;
    let horasMes = horasSemana*semanasTrabalhadas;
    let valorHora = salarioFuncionarioBase/horasMes;
    let percentualHoraExtra = 80;
    let valorHoraExtra = valorHora + (valorHora*percentualHoraExtra/100); //ele ganha 80% em cima na hora extra)
    let valorMesHoraExtra = valorHoraExtra*horasExtra;
    let salarioFuncionarioFinal = salarioFuncionarioBase+valorMesHoraExtra;

    alert(
        "Folha de Pagamento" +
        "\nNome: " + nomeFuncionario +
        "\nSálario Base: " + salarioFuncionarioBase.toFixed(2) +
        "\nHoras extra do mês: " + horasExtra +
        "\nValor da hora: " + valorHora +
        "\nValor da hora extra: " + valorHoraExtra +
        "\nSálario desse mês: " + salarioFuncionarioFinal.toFixed(2)
    );
}