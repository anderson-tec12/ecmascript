let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
// antes
itens.forEach(function(item) {
    console.log(item);
})

// refatorado
itens.forEach(item =>{
  console.log(item);
})
