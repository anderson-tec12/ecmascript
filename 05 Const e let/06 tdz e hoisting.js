// hoisting é quando chamamos uma função sendo que ela ainda nãão foi escrita mas o efeito hoisting vai jogar a funçããosempre para o inicio do codigo 

var nome = 'Anderson Barros Silva';

imprimeNome(nome);

function imprimeNome(nome){
  console.log('Nome:',nome);
}

// Temos algo no ecma6 time dead zone ou TDZ

let valor = 0;
if(true){
  console.log(valor2);
  let valor2;
}

console.log(valor);