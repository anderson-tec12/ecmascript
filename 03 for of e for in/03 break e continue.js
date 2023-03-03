var numeros = [1,2,3,4,5];

for(var numero of numeros){
    if(numero > 3) break;
    console.log(numero);
}

// não imprimir os pares


for(var numero of numeros){
    if(numero%2 === 0) continue;
    console.log(numero);
}