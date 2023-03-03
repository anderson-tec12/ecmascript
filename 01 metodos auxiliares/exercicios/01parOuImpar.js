let numeros = [0,1,2,3,4,5];

let parOuImpar = numeros.forEach(function(numero){
    if(numero % 2 === 0){
        return console.log(`${numero} é par`);
    }else{
        return console.log(`${numero} é impar`);
    }
});

console.log(parOuImpar);