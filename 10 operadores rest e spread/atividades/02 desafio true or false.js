// ## Exercício 2 - Eu sou maior do que você, lero lero!
// Utilize o operador Rest para criar uma função que recebe um parâmetro referência, que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

function todosSaoMaioresQue(parametro, ...numeros){
  let pass = true;

  for(numero of numeros){
    if(parametro >  numero){
      pass = false;
    }
  }

  console.log(pass);
}

// Exemplo:
todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

// Outros exemplos de entradas:
todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false
todosSaoMaioresQue(1,2); // resultado esperado: true
