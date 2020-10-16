// propriedade computada
// é quando passamos as propriedades do objeto por variaveis
// no objeto a variavel fica dentro de [] pois ela esta sendousada na propriedade deste objeto
// tammbem podemos passar expresoes dentro dos []


const nomeMetodo = 'invocar';
const objeto ={
  [nomeMetodo](){
    console.log('executou o metodo');
  }
}

objeto.invocar();

console.log(' ');

const nomeFuncao = 'mostrar';
const propriedade ='Nome';

const objeto2 ={
  Nome: 'Objeto',
  [`${nomeFuncao}${propriedade}`](){
    console.log(this[propriedade]);
  }
}

objeto2.mostrarNome();
