var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

  var aprovados = alunos.filter(function(aluno){
      return aluno.media >= 5;
  })

  console.log(aprovados);