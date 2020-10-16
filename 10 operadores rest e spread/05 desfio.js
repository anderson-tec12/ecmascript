/**
 * pequeno desafio: implemente um metodo que faça a leitura de varias palavras e indique no console a quantidade de vogais não acentuadas presentes
 * **/

 function contaQuantidadeVogaisNaoAcentuadas(...palavras){
   let qtdVogais = 0;
  //  percorrendo as palavras
   for(let palavra of palavras){
    //  transformando tudo em minuscolo por garantia
    let palavraLowerCase = palavra.toLowerCase();

    // tranformando a string em um array
    const letras = [...palavraLowerCase];

    //percorendo as letras
    for(letra of letras){
      // verificando se tem vogal
      // -1 é o que indexOf retorna quando não tem
      if("aeiou".indexOf(letra) !==-1){
        qtdVogais++;
      }
    }
   }

   console.log(qtdVogais);
 }

 contaQuantidadeVogaisNaoAcentuadas("es6");
 contaQuantidadeVogaisNaoAcentuadas("java", 'javascript','delphi');
 contaQuantidadeVogaisNaoAcentuadas("NãO ConSideRa AcentUAdos");
