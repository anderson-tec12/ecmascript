var nome = 'Anderson';
var sobrenome = 'Barros silva';

// ecmascript5

var pessoa = {
  nome:nome,
  sobrenome:sobrenome
};

console.log(pessoa);

// ecma6
// se as variaveis forem igual o nome do atributo ele associa sozinho

const seApresentar = function(){
  console.log(`Ola eu sou ${this.nome} ${this.sobrenome}`);
}
var people = {
  nome, sobrenome, seApresentar
};

console.log(people);
people.seApresentar();

// outra maneira de trabalhar com função
console.log("");
console.log("");

var people2 = {
  nome,
  sobrenome,
  seApresentar(){
    console.log(`Ola eu sou ${this.nome} ${this.sobrenome}`);
  }
};

console.log(people2);
people2.seApresentar();
