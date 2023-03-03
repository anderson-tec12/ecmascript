const seApresentar = function(){
  console.log(`Oi eu sou o ${this.nome}`);
}

const pessoa = {
  nome: 'Goku',
  equipe: 'Guerreiro Z',
  seApresentar
}

console.log(pessoa);

pessoa.seApresentar()
