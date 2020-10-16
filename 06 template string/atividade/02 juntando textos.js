function criaMacaroca(listaString){
  let textoFinal = '';

  for(let texto of letras){
    textoFinal = `${textoFinal}${texto}`;
  };

  return textoFinal;

};

let letras = ['a','b','c'];

console.log(criaMacaroca(letras));
