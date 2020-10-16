// OBJETIVO = verificar se umdos valores é verdadeiro

// antes

var jogos = [
    {nome:'Uncharted', categoria: 'ação'},
    {nome:'Crash Bandicoot', categoria: 'plataforma'},
    {nome:'Assassins Creed', categoria: 'aventure'},
    {nome:'Battlefield', categoria: 'shooter'},
    {nome:'Forza Motorsport', categoria: 'corrida'},
]

var todosJogosCorrida = false;

for(var i = 0 ; i < jogos.length; i++){
    var jogo = jogos[i];

    if(jogo.categoria === 'corrida'){
        todosJogosCorrida = true;
        break
    }
}

console.log(todosJogosCorrida)

// novo

todosJogosCorrida = jogos.some(function(jogo){
    return jogo.categoria ===  'corrida';
});

console.log(todosJogosCorrida)
