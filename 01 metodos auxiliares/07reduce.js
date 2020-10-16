// pegar todos os dados de um array e transformalo em um valor unico

var numeros =[2,2,3,4,5];

var soma = 0;

for(var i =0; i < numeros.length;i++){
    soma += numeros[i];
}
console.log(soma)

// usando o reduce 

var soma = numeros.reduce(function(interar, numero){
    return interar + numero;
}, 0);

// o 0 é para  o parametro de interação logo na primeira operação o valor vai iniciar com 0

console.log(soma);

// #### EXEMPLO 2

let filhos = [
    {nome:'Raphael', idade:'6'},
    {nome:'davi', idade:'4'},
    {nome:'Gabriel', idade:'2'},
];

// quero apenas os nomes dos filhos

var nomes = filhos.reduce(function(arrayNome, filho){
    arrayNome.push(filho.nome);
    return arrayNome;
},[]);

console.log(nomes);