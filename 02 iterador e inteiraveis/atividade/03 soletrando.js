

function soletrando(palavra){

    var letras = palavra.split("");
    //console.log(letras);

    var iteradorLetras = letras[Symbol.iterator]();
    var iteradorLetra = iteradorLetras.next();

    do{
        console.log(iteradorLetra.value);
        var iteradorLetra = iteradorLetras.next();
     
    }while(!iteradorLetra.done);
}

var palavra = "anderson";

soletrando(palavra);