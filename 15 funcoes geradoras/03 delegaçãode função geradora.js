const timeDesenvolvimento ={
  quantidade:3,
  maturidade:'alta',
  senior: 'Luis',
  pleno: 'Marcia',
  junior: 'anderson',
  [Symbol.iterator]: function* (){
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

const timeNegocios = {
  quantidade: 2,
  diretor: 'Marcelo',
  vice: 'Guilherme',
  [Symbol.iterator]: function* () {
    yield this.diretor;
    yield this.vice;
  }
};

const equipe = {
  timeDesenvolvimento,
  timeNegocios,
  [Symbol.iterator] : function*(){
    // yield* portda com interador do outro objeto
    yield* timeDesenvolvimento;
    yield* timeNegocios;
  }
}

for(integrante of equipe){
  console.log(integrante);
}
