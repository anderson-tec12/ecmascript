// OBJETIVO : porocurar o nome de um aluno no array
var alunos = [
    {nome:'Rapahel', idade: 6},
    {nome:'Davi', idade: 4},
    {nome:'Gabriel', idade: 2}
];

// antes

var procurado;

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.nome === 'Gabriel'){
        procurado = aluno;
        break;
    }
}


console.log(procurado);

// novo

var procuradoNovo = alunos.find(function(aluno){
    return aluno.nome === "Gabriel";
})

console.log(procuradoNovo);


// find retorna so um resgistro