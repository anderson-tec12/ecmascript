var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        var that = this;
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + that.nome);
        })
    }
}

equipe.imprimeNomes();

console.log('  ');
console.log('  ');
// refatorando

const grupo ={
  nome: 'Valentes da Glória',
  membros: ['Luciano', 'Maria', 'Virginia', 'Daniela'],
  imprimeNomes: function(){
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`);
    })
  }
}

grupo.imprimeNomes();
