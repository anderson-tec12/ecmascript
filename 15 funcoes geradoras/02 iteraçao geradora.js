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
const parada = linha12();
let linha = parada.next()


// passandpo por todas as interações via laço esse jeito não é tão bom

while(!linha.done){
  console.log(linha);
  linha = parada.next();
}
console.log(linha);

//maravilhoso
console.log(' ');
console.log('maravilhoso');
console.log(' ');

const maravilha = linha12();

for(let para of maravilha){
  console.log(para);
}
