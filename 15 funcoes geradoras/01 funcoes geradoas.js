/*
  funções geradoras pode sem interrompidas no meioda execução varias vezes
  * indica uma função geradora
  yield representa o ponto de parada
*/

// exemplificndo com uma linha de busão

function* linha12(){
  console.log('rua 1');
  yield('parada 1');

  console.log('rua 2');
  yield('parada 2');

  console.log('rua 3');
  yield('parada 3');
}

linha12(); // não funciona pois ela recebe o interador e para navegar devemos chamar o metodo next;
const linha = linha12();

// exibe o objeto com duas propriedades, value e done, se done for false é que não percorreu todos  os elementos
console.log(parada.next());
console.log(parada.next());
console.log(parada.next());
console.log(parada.next());
