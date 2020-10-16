// entendendo o contexto
// chamado de ThisBinding
// é chamado pelo This

function imprimeThis(){
  console.log(this);
}

// imprimeThis() // não funciona neste compilador repl.it

var objeto = {
  meuContexto : function(){
    console.log(this);
  }
}

objeto.meuContexto();

// entendendo ocontexto
// 1 objeto com 2 propriedades
// 1 metodo chamado membros da equipe que vai exibir os nomes

const equipe = {
  nome: 'Linguagens de programação',
  membros:["Javascrip", 'Java', 'C'],
  membrosDaEquipe:function(){
    this.membros.forEach(function(membro){ //este this e diferente do que esta abaixo por causa do contexto de execução
      console.log(`${membro} faz parte da equipe ${this.nome}`);
    })
  }
}

equipe.membrosDaEquipe();

// podemos passar os dados do this para uma variavel e chamala no lugar do novo this

console.log("#################################");

const equipe2 = {
  nome: 'Linguagens de programação',
  membros:["Javascrip", 'Java', 'C'],
  membrosDaEquipe:function(){
    const that = this;
    this.membros.forEach(function(membro){ //este this e diferente do que esta abaixo por causa do contexto de execução
      console.log(`${membro} faz parte da equipe ${that.nome}`);
    })
  }
}

equipe2.membrosDaEquipe();

// resolvendo com arrowsFunctions

console.log("#################################");

const equipe3 = {
  nome: 'Linguagens de programação',
  membros:["Javascrip", 'Java', 'C'],
  membrosDaEquipe:function(){
    this.membros.forEach(membro =>{ //este this e diferente do que esta abaixo por causa do contexto de execução
      console.log(`${membro} faz parte da equipe ${this.nome}`);
    })
  }
}

equipe3.membrosDaEquipe();
