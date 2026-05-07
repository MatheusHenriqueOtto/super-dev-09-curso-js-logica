function exemplo01() {
    let carros = [];
    carros.push("bmw m3");
    carros.push("BYD SEAL");
    carros.push("Mobi");
    carros.push("Chevet");

    carros[3] = "Chevette";

    carros.splice(2, 1);

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[1]
    )
}

function exemplo02() {
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno: "));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencias")));

    alunos.push(prompt("Digite o nome do aluno: "));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencias")));

    if (frequencias[0] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    if (frequencias[1] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    alert("Alunos" + alunos[0] +
        "\nNome: " + frequencias[0] +
        "\nStatus: " + status[0] +
        "\n\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status[1]
    )

}

function exercicio03() {
    //solicitar colaborador, quantidade de horas, valor hora
    //qual o maior valor hora pago
    //colaborador com maior salario
    //colaborador com menor nome

    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];

    let quantidade = parseInt(prompt("Digite a quantidade de colaboradores"));

    //solicitando aaaaaos dados dos colaboradores
    for (let i = 0; i < quantidade; i += 1) {
        let colaborador = prompt("Digite o nome do colaborador");
        let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas"));
        let valorHora = parseInt(prompt("Digite o valor da hora"));

        colaboradores.push(colaborador);
        horas.push(quantidadeHoras);
        valores.push(valorHora);

    }

    //calcular os salarios armazenados no vetor de salarios
    //for: percorrendo cada um dos colaboradores
    for (let i = 0; i < quantidade; i += 1) {
        //pegando o vetor de horas armazenado naquel posicao percorrida
        let quantidadeHoras
    }

    //descobrir o maior valor hora entre os colaboradores
    let maiorValorHora = 0;
    for (let i = 0; i < quantidade; i += 1) {
        //pegando do vetor de horas o elemento que esta na posicao do indice percorrido
        let valorHora = valores[i];

        if (valorHora > maiorValorHora) {
            maiorValorHora = valorHora;
        }

        //descobrir colaborador com maior salario
        let maiorSalario = 0;
        let nomeMaiorSalario = "";
        //percorrer o vetor de salarios para descobrir o maior salario
        //armazenar na variavel o maior salario o nome de quem possui o maior salario

        for (let i = 0; i < quantidade; i += 1) {
            let salario = salarios[i];
            let colaborador = colaboradores[i]

            if (salario > maiorSalario) {
                maiorSalario = salario;
                nomeMaiorSalario = colaborador;
            }

        }

        //descobrir quem tem o menor nome
        let colaboradorMenorNome = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
        for (let i = 0; i < quantidade; i += 1) {
            let colaborador = colaboradores[i];

            if (colaborador.length < colaboradorMenorNome) {
                colaboradorMenorNome = colaborador;
            }

            alert(`O maior valor hora pago : ` + maiorValorHora + `
                Colaborador com maior salaario: ` + nomeMaiorSalario + `
                Colaborador menor nome: ` + colaboradorMenorNome);
        }

    }

}

function exemplo04() {
    let numeros = []

    let opcaoMenu = parseInt(prompt(`1 - cadastrar
        2 - listar todos
        3  - Apresentar maior
        10 - sair`));

    while (opcaoMenu !== 10) {
        if (opcaoMenu === 1) {
            let numero = parseInt(prompt("Digite  o numero"));
            numeros.push(numero)
            alert("Numero adicionado com sucesso");
        } else if (opcaoMenu === 2) {
            let texto = ("Numeros cadastrados: \n");
            for (let i = 0; i < numeros.length; i += 1) {
                let numero = numeros[i];
                texto = texto + numero + "/n"
            }
            alert(texto)
        } else if (opcaoMenu === 3) {
            let maiorNumero = 0;
            for (let i = 0; i < numeros.length; i += 1) {
                if (numeros[i] > maiorNumero) {
                    maiorNumero = numeros[i];
                }
            }
            alert("Maior número : " + maiorNumero);
        }

        opcaoMenu = parseInt(prompt(`1 - cadastrar
            2 - listar todos
            3  - Apresentar maior
            10 - sair`));

    }
}

