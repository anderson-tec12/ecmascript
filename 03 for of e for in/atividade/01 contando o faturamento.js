
// ## Exercício 1 - Contando o faturamento
// Escreva uma função chamada `somaFaturamento` que recebe uma lista de números inteiros e devolve a soma destes valores.

// * Exemplo: somaFaturamento([1,2,3,4]) → 10

function somaFaturamento(valores){
  var total = 0;
  for(var valor of valores){  
    total += valor; 
  }
  console.log(total);
}

var valores = [1,2,3,4];

somaFaturamento(valores);