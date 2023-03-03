function simulaPromise(sucesso, delay){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(sucesso) resolve('ok');
      else reject('not Ok');
    }, delay)
  });

  promise.then((data) => console.log(`resultado: ${data}`));
  promise.catch((data) => console.log(`resultado: ${data}`));
}

simulaPromise(false, 2000);
