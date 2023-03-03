// testede assincrono *async
let promise = new Promise((resolve, reject) =>{
  let restSync = false;
  let tempo = 5000;
  setTimeout(() =>{
    if(restSync) resolve('foi, podemos ficar aliviados');
    else reject('Epaa olha o miau')
  }, tempo)
});


promise.then((data) => console.log(`${data}`));
promise.catch((data) => console.log(`${data}`))

console.log(`codigo continua a ser executado
mesmo sem a promise finalizar o carregamento
estamos simulando um webservice`)
