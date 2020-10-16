function simulaPromise(sucesso){
  let promise = new Promise((resolve, reject) => {
    if(sucesso) resolve('ok');
    else reject('not Ok');
  });

  promise.then((data) => console.log(`resultado: ${data}`));
  promise.catch((data) => console.log(`resultado: ${data}`));
}

simulaPromise(false);
