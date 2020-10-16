// lista de compras

function ta(strings, ...values){
  //console.log(strings[0]);

  var dados = values[0].split(",");

  var dadosTag = dados.map(function(dado){
    return `<li>${dado}</li>`
  });

  return `<ul>${dadosTag}</ul>`
}

const compras = 'leite, feijão, arroz, mandioca';

var msg = ta`${compras}`;
console.log(msg);
