// ## Exercício 5 - Não vá por ali!
// Implemente o método 'percorreRuas' que recebe dois parâmetros:
// - ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')
// - ruaPerigosa: String que represeta o nome da rua que deve ser evitada

// Faça com que o método percorra cada uma das ruas exibindo no console, menos para a `ruaPerigosa`.
// Utilize o `for...of` e o `continue` para fazer esta lógica.

var ruas = ['rua 1', 'rua 2', 'rua 3', 'rua 4', 'rua 5'];
var ruaPerigosa = 'rua 3';

for( rua of ruas){
   if(rua === ruaPerigosa) continue;
   console.log(rua);
}