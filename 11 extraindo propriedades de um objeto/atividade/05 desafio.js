const corpoDocente = [
  [ 'Gramática', '9:00', 'Sueli' ],
  [ 'Matemática', '10:15', 'Amilton'],
  [ 'Educação Física', '11:30', 'Bruno' ]
];

function mostraGradeProfessores(corpoDocente){
   return corpoDocente.forEach(([materia, horario, professor]) => {
   console.log(`Aula de ${materia} às ${horario} com professor(a) ${professor}`);
  })
};

mostraGradeProfessores(corpoDocente);
