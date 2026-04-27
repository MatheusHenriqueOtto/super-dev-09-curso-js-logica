function funcaoDezoito() {
    let idade = parseInt(prompt("Digite sua idade"));
    let renda = parseFloat(prompt("Digite sua renda mensal"));

    if ((idade >= 18) && (renda >= 2000)) {
        alert("Crédito aprovado");
    } else {
        alert("Credito não aprovado");
    }
}

function funcaoDezenove() {
    let horario = parseFloat(prompt("Digite que horas são \nModelo de resposta(18.50)"));

    if ((horario >= 0) && (horario <= 11)) {
        alert("Bom dia");
    } else if ((horario >= 12) && (horario <= 17)) {
        alert('Boa tarde');
    } else if ((horario >= 18) && (horario <= 23)) {
        alert("Boa noite")
    } else {
        alert("Horario invalido")
    }
}

function funcaoVinte() {
    let numero1 = parseFloat(prompt("Digite o primeiro numero"));
    let numero2 = parseFloat(prompt("Digite o segundo numero"));
    let operacao = prompt("Digite a operação \n| Soma | Subtração | Multiplicaçao | Divisão (Numeros diferentes de 0) |");

    if (operacao === "Soma") {
        alert(numero1 + numero2);
    } else if (operacao === "Subtração") {
        alert(numero1 - numero2);
    } else if (operacao === "Multiplicação") {
        alert(numero1 * numero2);
    } else if ((operacao === "Divisão") && (numero1 != 0) && (numero2 != 0)) {
        alert(numero1 / numero2);
    } else {
        alert("Campos inválidos");
    }
}

function funcaoVinteUm() {
    let x = parseInt(prompt("digite o primeiro numero")); //1
    let y = parseInt(prompt("digite o segundo numero")); // 2
    let z = parseInt(prompt("digite o terceiro numero")); //3

    let primeiro = null;//1
    let segundo = null;//2
    let terceiro = null;//3

    //pra achar o maior dos tres
    //    if ((x > y) && (x > z)){ 
    //        terceiro = x; //false
    //    } else if ((y > x) && (y > z)){
    //        terceiro = y; //false
    //    } else if ((z > x) && (z > y)){
    //        terceiro = z; //true
    //    } 

    //pra achar o menor dos tres
    //    else if ((x < y)&&(x < z)){  
    //        primeiro = x; //true
    //    } else if ((y < x)&&(y < z)){
    //        primeiro = y; //false
    //    } else if ((z < x) && (z < y)){
    //        primeiro = z; //false
    //    } 

    //pra achar o do meio
    //    else if (((terceiro === y) && (primeiro === z)) || ((terceiro === z) && (primeiro === y))){ 
    //        segundo = x;
    //    } else if (((terceiro === x) && (primeiro === z)) || ((terceiro === z) && (primeiro === x))){
    //        segundo = y;
    //    } else if (((terceiro === x) && (primeiro === y)) || ((terceiro === y) && (primeiro === x))){
    //        segundo = z;
    //    }


    if ((x >= y) && (x >= z)) {
        if (z >= y) {
            terceiro = x;
            segundo = z;
            primeiro = y;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        } else if (y >= z) {
            terceiro = x;
            segundo = y;
            primeiro = z;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        }
    } else if ((y >= x) && (y >= z)) {
        if (x >= z) {
            terceiro = y;
            segundo = x;
            primeiro = z;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        } else if (z >= x) {
            terceiro = y;
            segundo = z;
            primeiro = x;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        }
    } else if ((z >= x) && (z >= y)) {
        if (x >= y) {
            terceiro = z;
            segundo = x;
            primeiro = y;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        } else if (y >= x) {
            terceiro = z;
            segundo = y;
            primeiro = x;
            alert(primeiro + ", " + segundo + ", " + terceiro);
        }
    } else {
        alert("Valor invalido")
    }
}