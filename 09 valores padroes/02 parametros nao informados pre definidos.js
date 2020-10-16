
// com ecma6 valores predefinidos nas funcoes

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio){
  if(nomeDoMeio === undefined){
    console.log(`${nome} ${sobrenome}`);
  }else{
    console.log(`${nome} ${sobrenome} ${nomeDoMeio}`);
  }
}

imprimeNomeCompleto('Anderson', 'Barros',  'Silva');
imprimeNomeCompleto('Anderson', 'Barros');

console.log(`
ecma6
`)

function imprimeNomeCompleto2(nome, sobrenome, nomeDoMeio =''){
    console.log(`${nome} ${sobrenome} ${nomeDoMeio}`);

}

imprimeNomeCompleto2('Anderson', 'Barros',  'Silva');
imprimeNomeCompleto2('Anderson', 'Barros');
