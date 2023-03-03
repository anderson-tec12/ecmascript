// uma promisse tem 3 estagios que são
/*
  inicial espera algo a ser finalizado
  resolvido operação concluida sem erros
  rejeitado operação concluida porem com erros
*/

// por padrão a promisse precisa de 2 parametro
let promise = new Promise((resolve, reject) =>{
  let restSync = false;
  if(restSync){
    resolve('deu tudo certo');
  }else{
    reject('Deu ruim corre');
  }
});

// toda promise recebe 2 argumentos por padrão o then e catch
//then para sucesso e catch para erros;

/*
  para recuperar os dados passados como parametros na função da  promisse usamos o data


  data ja foi definido pelo ecmascript

  data dentro do then() retorna quando der certo
  data dentro do catch() retorna quando da errado
*/
promise.then((data) => console.log(`${data}`));
promise.catch((data) => console.log(`${data}`))
