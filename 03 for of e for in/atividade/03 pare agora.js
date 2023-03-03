
// ## Exercício 4 - Pare aqui senhor motorista
// Implemente o método `percorreRuas` que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

// * Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'

// Utilize o laço `for...of` e o `break` para não percorrer mais ruas que o necessário.


function paradaSolicitada(ruas, parada){
    for(rua of ruas){
      if(rua === parada) break;
       console.log(rua);
  }
  
  }
  
  var ruas = ['rua 1', 'rua 2', 'rua 3', 'rua 4'];
  var parada = 'rua 3';
  
  paradaSolicitada(ruas, parada);
  