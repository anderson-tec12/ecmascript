// ## Exercício 5 - Não vou mais com a sua cara.
// Implemente o método `deletaAmigos` que recebe dois parâmetros:
// - amigos: Mapa com relação de nome e informações sobre os amigos
// - exAmigos: Lista com nome dos amigos que deve ser deletado

// Para cada nome em `exAmigos`, você deve:
// - Verificar se nome consta na lista. Se sim, deletá-lo e imprimir no console: "<nome> foi deletado!"
// - Se o nome não estiver no mapa de amigos, exibir no console para o usuário: "<nome> não é seu amigo!"
// Considere os seguintes amigos para este exercícios:

// Amigos:

// |Nome|Dados|
// |----|----|
// |João Silva|idade: 23, sexo: masculino|
// |Luisa Pimenta|idade: 18, sexo: feminino|
// |Julio Marinho|idade: 52, sexo: masculino|
// |Marcela Mel|idade: 27, sexo: feminino|



function deletaAmigos(exAmigos, amigos){
    for(exAmigo of exAmigos){
      if(amigos.get(exAmigo)){
        amigos.delete(exAmigo);
        console.log(`O ${exAmigo} foi deletado da lista`);
      }else{
       console.log(`O ${exAmigo} não se encontra na lista`)
      };
    }
  }
  
  var amigos = new Map();
   
    amigos.set('Joao Silva', {idade: 23, sexo:'masculino'});
    amigos.set('Luisa Pimenta', {idade: 18, sexo:'feminino'});
    amigos.set('Julio Marinho', {idade: 52, sexo:'masculino'});
    amigos.set('Marcela Mel', {idade: 27, sexo:'feminino'});
  
  
  var exAmigos = ['Joao Silva', 'Julio Marinho','Anderson'];
  
  deletaAmigos(exAmigos, amigos);
  