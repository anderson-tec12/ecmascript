var chapeuSelector = function(bruxo){
    var casas = ['Grifinoria', 'Sonserina', 'Corvinal', 'Lufa-lufa'];
    var casa = casas[Math.floor(Math.random() * casas.length)];

    console.log("Bruxo: "+ bruxo + "Casa: "+ casa);
}

// escolhendo  as casas dos bruxos
var bruxos = ['Harry Potter', 'Hermione', 'Rony'];
var iterator = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();
do{
    var bruxo = proximo.value;
    chapeuSelector(bruxo);
    var proximo = iterator.next();
}while(!proximo.done);