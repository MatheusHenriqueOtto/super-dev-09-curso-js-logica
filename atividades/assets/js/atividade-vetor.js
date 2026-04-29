function exercicio01() {
    let perfumes = [];
    perfumes.push("Malbec");
    perfumes.push("Qzar");
    perfumes.push("Kaiak");
    perfumes.push("Yara");

    alert(perfumes)

    perfumes[1] = "Ferrari Black";

    perfumes.push("Egeo");

    perfumes.splice(0, 1);

    alert(perfumes);
}

function exercicio02() {
    let materias = [];
    let cargaHoraria = [];
    let preco = [];

    materias.push("HTML");
    cargaHoraria.push(parseInt(100));
    preco.push(parseFloat(200.00));

    materias.push("CSS");
    cargaHoraria.push(120);
    preco.push(250.00);

    materias.push("PYTHON");
    cargaHoraria.push(350);
    preco.push(550.00);

    alert("Materias: " + materias +
        "\nCargas horarias: " + cargaHoraria +
        "\nPreços: " + preco
    )

    materias[1] = "LOGICA";

    cargaHoraria[0] = 50;

    alert("Materia: " + materias[0] +
        "\nCargas horarias: " + cargaHoraria[0] +
        "\nPreços: " + preco[0] +
        "\n\nMateria: " + materias[1] +
        "\nCargas horarias: " + cargaHoraria[1] +
        "\nPreços: " + preco[1] +
        "\n\nMateria: " + materias[2] +
        "\nCargas horarias: " + cargaHoraria[2] +
        "\nPreços: " + preco[2]
    )

}

function exercicio03() {
    let destinosTuisticos = [];

    destinosTuisticos.push(prompt("Digite um ponto turistico: "));
    destinosTuisticos.push(prompt("Digite mais um ponto turistico: "));
    destinosTuisticos.push(prompt("Digite outro ponto turistico: "));
    destinosTuisticos.push(prompt("Digite o ultimo ponto turistico: "));

    alert("Os pontos turisticos são: " + destinosTuisticos);

    destinosTuisticos[1] = prompt("Digite outro nome para o segundo destino turistico: ");

    destinosTuisticos.push(prompt("Adicione mais um destino turistico: "));

    destinosTuisticos.splice(0, 1);

    alert("Os destinos turiscos defininidos são: \nPrimeiro: " + destinosTuisticos[0] + "\nSegundo: " + destinosTuisticos[1] + "\nTerceiro: " + destinosTuisticos[2] + "\nQuarto: " + destinosTuisticos[3]);
}

function exercicio04() {
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Digite um restaurante: "));
    cidades.push(prompt("Digite a cidade em que ele se localiza: "));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio por pessoa nesse restaurante: ")));

    restaurantes.push(prompt("Digite mais um restaurante: "));
    cidades.push(prompt("Digite em que cidade ele se localiza: "));
    valoresMedios.push(parseFloat(prompt("Digite qual o valor medio por pessoa: ")));

    restaurantes.push(prompt("Digite outro restaurante: "));
    cidades.push(prompt("Digite em que cidade o restaurante se localiza: "));
    valoresMedios.push(parseFloat(prompt("Digite o valor por pessoa médio: ")));

    alert("Dados dos restaurantes \nrestaurante 1: " + restaurantes[0] +
        "\nCidade: " + cidades[0] + "\nValor Medio" + valoresMedios[0] +
        "\n\nrestaurante 2:" + restaurantes[1] +
        "\nCidade: " + cidades[1] + "\nValor Medio" + valoresMedios[1] +
        "\n\nrestaurante 3:" + restaurantes[2] +
        "\nCidade: " + cidades[2] + "\nValor Medio" + valoresMedios[2]
    )

    restaurantes[0] = prompt("Digite um novo nome para o primeiro restaurante: ");

    valoresMedios[2] = parseFloat(prompt("Digite o novo valor medio do terceiro restaurante, devido a inflação do municipio"));

    alert("Dados dos restaurantes atualizados \nrestaurante 1: " + restaurantes[0] + "\nCidade: " + cidades[0] + "\nValor Medio" + valoresMedios[0] + "\n\nrestaurante 2:" + restaurantes[1] + "\nCidade: " + cidades[1] + "\nValor Medio" + valoresMedios[1] + "\n\nrestaurante 3:" + restaurantes[2] + "\nCidade: " + cidades[2] + "\nValor Medio" + valoresMedios[2]
    )
}

function exercicio05() {
    let filmes = [];
    let generos = [];
    let duracoesMinutos = [];
    let duracoesHoras = [];

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesMinutos[0]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesMinutos[1]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesMinutos[2]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesMinutos[3]) / 60);

    console.log(
        "Dados dos filmes: \nfilme 1: " + filmes[0] + "\nGenero do filme: " + generos[0] + "\nDuração em minutos: " + duracoesMinutos[0] + "\nDuração em horas: " + duracoesHoras[0] +
        "\n\nfilme 2: " + filmes[1] + "\nGenero do filme: " + generos[1] + "\nDuração em minutos: " + duracoesMinutos[1] + "\nDuração em horas: " + duracoesHoras[1] +
        "\n\nfilme 3: " + filmes[2] + "\nGenero do filme: " + generos[2] + "\nDuração em minutos: " + duracoesMinutos[2] + "\nDuração em horas: " + duracoesHoras[2] +
        "\n\nfilme 4: " + filmes[3] + "\nGenero do filme: " + generos[3] + "\nDuração em minutos: " + duracoesMinutos[3] + "\nDuração em horas: " + duracoesHoras[3]
    );

    generos[1] = prompt("Digite um novo genero para o filme: " + filmes[1]);

    duracoesMinutos[0] = prompt("Digite uma nova duração para o filme: " + filmes[0]);
    duracoesHoras[0] = duracoesMinutos[0] / 60;

    filmes.splice(3, 1);
    generos.splice(3, 1);
    duracoesMinutos.splice(3, 1);
    duracoesHoras.splice(3, 1);

    console.log(
        "Dados dos filmes Atualizados: \nfilme 1: " + filmes[0] + "\nGenero do filme: " + generos[0] + "\nDuração em minutos: " + duracoesMinutos[0] + "\nDuração em horas: " + duracoesHoras[0] +
        "\n\nfilme 2: " + filmes[1] + "\nGenero do filme: " + generos[1] + "\nDuração em minutos: " + duracoesMinutos[1] + "\nDuração em horas: " + duracoesHoras[1] +
        "\n\nfilme 3: " + filmes[2] + "\nGenero do filme: " + generos[2] + "\nDuração em minutos: " + duracoesMinutos[2] + "\nDuração em horas: " + duracoesHoras[2]
    )
}

function exercicio06() {
    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotais = [];

    produtos.push(prompt("Digite um produto: "));
    quantidades.push(prompt("Digite a quantidade da compra desse produto: "));
    precos.push(prompt("Digite o peço unitario do produto da compra: "));
    valoresTotais.push(preco[0] * quantidades[0]);

    produtos.push(prompt("Digite um produto: "));
    quantidades.push(prompt("Digite a quantidade da compra desse produto: "));
    precos.push(prompt("Digite o peço unitario do produto da compra: "));
    valoresTotais.push(preco[1] * quantidades[1]);

    produtos.push(prompt("Digite um produto: "));
    quantidades.push(prompt("Digite a quantidade da compra desse produto: "));
    precos.push(prompt("Digite o peço unitario do produto da compra: "));
    valoresTotais.push(preco[2] * quantidades[2]);

    console.log(
        "Status do carrinho: \n\nProduto: " + produtos[0] + "\nQuantidade: " + quantidades[0] + "\nPreço unitário: " + precos[0] + "\nPreço total: " + valoresTotais[0] +
        "\n\nProduto: " + produtos[1] + "\nQuantidade: " + quantidades[1] + "\nPreço unitário: " + precos[1] + "\nPreço total: " + valoresTotais[1] +
        "\n\nProduto: " + produtos[2] + "\nQuantidade: " + quantidades[2] + "\nPreço unitário: " + precos[2] + "\nPreço total: " + valoresTotais[2]
    );

    produtos.push(prompt("Digite mais um produto: "));
    quantidades.push(prompt("Digite a quantidade da compra desse produto: "));
    precos.push(prompt("Digite o peço unitario do produto da compra: "));
    valoresTotais.push(preco[3] * quantidades[3]);

    precos[1] = prompt("Digite um novo valor para o produto: " + produtos[1]);
    valoresTotais[1] = precos[1] * quantidades[1];

    produtos.splice(0, 1);
    quantidades.splice(0, 1);
    precos.splice(0, 1);
    valoresTotais.splice(0, 1);

    console.log(
        "Status do carrinho atualizado: \n\nProduto: " + produtos[0] + "\nQuantidade: " + quantidades[0] + "\nPreço unitário: " + precos[0] + "\nPreço total: " + valoresTotais[0] +
        "\n\nProduto: " + produtos[1] + "\nQuantidade: " + quantidades[1] + "\nPreço unitário: " + precos[1] + "\nPreço total: " + valoresTotais[1] +
        "\n\nProduto: " + produtos[2] + "\nQuantidade: " + quantidades[2] + "\nPreço unitário: " + precos[2] + "\nPreço total: " + valoresTotais[2]
    );

}





















