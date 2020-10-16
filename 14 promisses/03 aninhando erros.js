// testede assincrono *async
let promise = new Promise((resolve, reject) =>{
  throw new Error('erro!'); //simulando um erro pode ser de algo que não existe

  resolve('ok');//forçando a solução
});


// // podemos fazer o aninhamento
// promise
// .then((data) => console.log('sucesso'))
// .catch((data) => console.log('olha o erro ai'))

let promise2 = new Promise((resolve, reject) =>{
  resolve('ok');
});

/*
    mesmo se no inicia esteja certo mas como podemos passar varios then
    se um deles conter erro invalidara toda apromise com error
*/
promise2
  .then((data) =>{
    console.log(`sucesso: ${data}`);
    throw new Error('erro!');

    return data;
  })
  .then((data) => console.log('Sucesso2: ${data}'))
  .catch((data) => console.log(`falha:${data}`))
