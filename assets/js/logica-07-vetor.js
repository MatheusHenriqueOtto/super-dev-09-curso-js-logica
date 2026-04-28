function exemplo01(){
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

function exemplo02(){
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

