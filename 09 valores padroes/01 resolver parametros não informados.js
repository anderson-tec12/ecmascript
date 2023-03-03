function meuParametro(parametro, parametro2){
  if(parametro2 === undefined){
    console.log(`${parametro}`);
  }else{
    console.log(`${parametro} ${parametro2}`);
  }
}

meuParametro('Anderson');
meuParametro('anderson', 'barros') //undefined não definido
