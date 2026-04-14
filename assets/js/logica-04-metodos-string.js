function exemploTolowercase() {
    let nome = "Jonh Doe";
    let nomeMinusculo = nome.toLowerCase();

    console.jog("Nome minusculo: " + nomeMinusculo)
}

function exemploToUpperCase() {
    let nome = "Jonh Doe";
    let nomeMaisculo = nome.toUpperCase();

    console.log("Nome maiusculo: " + nomeMaiusculo)
}

function exemploTamanho() {
    let nome = "jonh Doe";
    let quantidadeCaracters = nome.length;

    console.log("Texto: " + nome);
    console.log("quantidade de cracteres");
}

function exemploSubstituicao() {
    let texto = "uva pera maca";
    let textoCorrigido = texto.replace(maca, maça)

    console.log("texto original: " + texto)
    console.log("texto corrigido: " + textoCorrigido)
}

function exemploDeSubstituicaoNaPropriaVariavel() {
    let texto = prompt("Digite o preço")
    texto = texto.replace(",", ".");
    texto = texto.replace("R$", "");
    texto = texto.replaceAll(" ", "");

    console.log(texto)
}

function removereEspacosDoFim() {
    let texto = "    Batman vive a noite, de dia dorme     "
    texto = texto.trimEnd();
    console.log(texto)
}

function removerEspacosDoComeco() {
    let texto = "     Batman vive a noite, de dia dorme    "
    texto = texto.trimStart();
    console.log(texto)
}

function removerEspacosDoComecoDoFinal() {
    let texto = "    Batman vive a noite, de dia dorme     "
    texto = texto.trim();
    console.log(texto);
}

function agregarCaracteresFim() {
    let nome = "Paulo C";
    console.log("Nome e Cartão" + nome.padEnd(20, "*"));

}

function agregarCaracterComeco() {
    let finalCartaoDeCredito = "7292";
    console.log(finalCartaoDeCredito.padStart(12, "*"))
}

function verificarSeComecaCom() {
    let texto = prompt("Digite a palavra secreta");
    //verificar se comeca com "P"
    if (texto.toUpperCase().startsWith("P") === true) {
        console.log("Vc pode entrar na festa"),
    } else {
        console.log("Vc nao pode entrar na festa");
    }
}

function verificarSeContem() {
    let nomeEpisodio = prompt("Digite o nome do episodio"),
    //verificar se tem S01
    if (nomeEpisodio.includes("S01")) {
        alert("Primeir Temporada");
    } else if (nomeEpisodio.includes("S02")) {
        alert("Segunda temporada")
    } else {
        alert("Não")
    }
}

function verificarSeTerminaCom() {
    let bolo = prompt("Digite bolo de que")

    if (bolo.endWith("chocolate") === true) {
        alert("boa escola");
    } else {
        alert("Não");
    }
}

function pegarPosicao() {
    let fruta = "Abacate";
    let primeiroCaracter = fruta[0]
    console.log(primeiroCaracter)
}

function quebrarString() {
    let horaMinuto = "20:30"

    let partes = horaMinuto.split(":");
    //split => ["20","30"]

    console.log(partes)
    let hora = partes[0];
    let Minutos = partes[1]
}

function exemploPegrParteDaString() {
    let nomeCompleto = "Ruan Costa"

    let nome = nomeCompleto.slice(0, 4); //Ruan
    let sobrenome = nomeCompleto.slice(5, 4);

    console.log(nome);
    console.log(sobrenome);
}

function pegarIndiceDoCaracter() {
    let numeroCartao = "3009 5660 6655 2099";

    let indicePrimeiroEspaco = numeroCartao.indexOf(" ");

    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaco)

    console.log(numeroCartao);
    console.log(primeiraParteCartao);
}

