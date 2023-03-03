// OBJETIVO = verificar se todos os valores do array são verdadeiro

// antes

var jogos = [
    {nome:'Uncharted', categoria: 'ação'},
    {nome:'GRan turismo', categoria: 'corrida'},
    {nome:'Need for Speed ', categoria: 'corrida'},
    {nome:'Mario Kart 8', categoria: 'corrida'},
    {nome:'Forza Motorsport', categoria: 'corrida'},
]

var todosJogosCorrida = true;

for(var i = 0 ; i < jogos.length; i++){
    var jogo = jogos[i];

    if(jogo.categoria !== 'corrida'){
        todosJogosCorrida = false;
        break
    }
}

console.log(todosJogosCorrida)

// novo

todosJogosCorrida = jogos.every(function(jogo){
    return jogo.categoria ===  'corrida';
});

console.log(todosJogosCorrida)
