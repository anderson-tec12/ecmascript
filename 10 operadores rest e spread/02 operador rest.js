// arguments x Rest
// ...valores = numeros indefinidos de parametros

// arguments não é array
// rest é um array e podemos usar os metodos axiliares

function somaTudo(...valores){
  let soma = 0;
  const qtd =  valores.length;

  for(let i = 0; i < qtd; i++){
    soma += valores[i];
  }

  console.log(soma);
}

somaTudo(1);
somaTudo(1,2);
somaTudo(1,2,3);

// tranformando isso em ecmascript 6 totalmente
console.log(' ')

function somaTudo6(...valores){
  return valores.reduce((soma, valor) => {
    return soma + valor
  }, 0);
}


console.log(somaTudo6(1))
console.log(somaTudo6(1,2))
console.log(somaTudo6(1,2,3))

//
console.log(' ')

// multiplicadoe = é o parametro fixo
// o rest pega somente os ultimos parametros por isso podemos deixar o primeiro fixo

function multiplicaPorESoma(multiplicador, ...valores){
  return valores.reduce((soma, valor) => {
    return soma + (valor*multiplicador);
  }, 0);
}


console.log(multiplicaPorESoma(2,1,2))
console.log(multiplicaPorESoma(2,6,7))
