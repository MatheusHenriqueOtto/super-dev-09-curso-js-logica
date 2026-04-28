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
    duracoesHoras.push((duracoesHoras[0]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesHoras[1]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesHoras[2]) / 60);

    filmes.push(prompt("Digite o filme: "));
    generos.push(prompt("Digite o genero do filme: "));
    duracoesMinutos.push(parseFloat(prompt("Digite a duração do filme(em minutos): ")));
    duracoesHoras.push((duracoesHoras[3]) / 60);




}






















