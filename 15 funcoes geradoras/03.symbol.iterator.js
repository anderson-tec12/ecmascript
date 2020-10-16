
const objeto ={
  valor:10,
  [Symbol("simbolo")]:"oi eu sou um simbolo"
}

console.log(objeto.valor);
console.log(objeto.simbolo);//não é acessado facilmente

// array
// todos os objetos tem osymbol interator
const primos = [2,3,5];
const interador = primos[Symbol.iterator]();
console.log(interador.next());

const equipe ={
  quantidade:3,
  senior: 'Luis',
  pleno: 'Marcia',
  junior: 'anderson',
  [Symbol.iterator]: function* (){
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

for(let integrante of equipe){
  console.log(integrante);
}
