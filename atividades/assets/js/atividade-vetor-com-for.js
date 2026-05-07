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

function exercicio05() {
    let idades = [];

    for (let i = 0; i < 4; i += 1) {
        let idade = parseInt(prompt("Digite a idade"));
        idades.push(idade);
    }

    let texto = ("Idades armazenadas no vetor: \n");
    for (let i = 0; i < 4; i += 1) {
        texto = (texto + nomes + "\n");
    }
    alert(texto);
}

