var carro = {
    modelo: "FIAT",
    ano: 1995
}

for(var propriedades in carro){
    console.log(propriedades);
    var info = carro[propriedades];
    console.log(info);
}