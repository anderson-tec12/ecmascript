var boasVindas =  function(nome){
  return console.log(nome);
}

boasVindas("Anderson");

var arrowFunc = (nome) =>{
  return console.log(nome);
}

arrowFunc("Anderson");
arrowFunc("#### melhorando");
// como so tem um parametro podemos remover os parentes as chaves e o return
var arrow = nome => console.log(nome);

arrow("Anderson");
