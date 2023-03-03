// OBJETIVO = duplicar os valores de um array

var numeros = [1, 2, 3];
var numerosDobrados = [];

numeros.forEach(function(numero){
    numerosDobrados.push(numero * 2 );
});


console.log(numerosDobrados);


// Usando o novo metodo MAP


var dobro = numeros.map(function(numero){
    return numero * 2
})


console.log(dobro);