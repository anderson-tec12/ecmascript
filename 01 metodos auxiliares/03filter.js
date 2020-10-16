// OBJETIVO : FILTRAR ELEMENTOS DE UM ARRAY
var alunos = [
    {nome:'Rapahel', idade: 6},
    {nome:'Davi', idade: 4},
    {nome:'Gabriel', idade: 2}
];

// antes

var alunoDeMaior = [];

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.idade >= 4){
        alunoDeMaior.push(aluno);
    }
}


console.log(alunoDeMaior);

// novo

var filtrado = alunos.filter(function(aluno){
    return aluno.idade >= 4;
})

console.log(filtrado);