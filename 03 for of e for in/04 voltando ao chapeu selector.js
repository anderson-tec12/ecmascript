var chapeuSelector = function(bruxo){
    var casas = ['Grifinoria', 'Sonserina', 'Corvinal', 'Lufa-lufa'];
    var casa = casas[Math.floor(Math.random() * casas.length)];

    console.log("Bruxo: "+ bruxo + "Casa: "+ casa);
}

// escolhendo  as casas dos bruxos
var bruxos = ['Harry Potter', 'Hermione', 'Rony'];

for(var bruxo of bruxos){
    chapeuSelector(bruxo);
}