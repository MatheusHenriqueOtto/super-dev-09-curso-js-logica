function exemploMensagem(){
    alert("Helo word minha primeira mensagem Matheus")
}

function exemploString(){
    //criando a variavel
    let nome = "Elias";
    let sobrenome = "Otto com dois t";

    //Alterar o valor da variavel
    sobrenome = "Otto";

    //Apresntando a variavel
    alert(nome, sobrenome);
    alert(sobrenome);
    
}

function exemploStringContenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    //Concatenação: juntar em string(texto) com alguma outra coisa

    //"Sabão em pó" + " " => "Sabão em pó "
    //"Sabão em pó " + "Omo" => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC da xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    // "\n" serve para quebrar linha
    alert(
        "Produto: " + produto +
        "\nQuantidade de Pcs: " + quantidadePcs + 
        "\nTotal de GB dos PCs: " + totalGb + "GB"
    );
}

function exemploFloat(){
    let endereco = "rua xv de Novembro";
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQauadrado = largura * comprimento;

    alert("M² do terreno: " + metroQauadrado);

}

function exemploBoolean(){
    //Quando entra na empresa
    let tenhoFeriasVencidas = false;

    //completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Ferias vencidas? " + tenhoFeriasVencidas);
}