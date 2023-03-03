//orientação a objetos
// herenç,criando o objeto

//função contrutora
function Carro(modelo, chassi, qtdPortas){
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}

// adicionando metodos
Carro.prototype.andar = function(){
  console.log('vrum vrum');
}

// Instanciando o objeto
var prototipo = new Carro('prototipo','321123', 2);

// visualizando o Carro
console.log(prototipo.modelo, prototipo.chassi, prototipo.qtdPortas);
prototipo.andar();

// carro top de linha
// este carro contem diversas funcionalidades que os outros carros não tem logo ele precisa pegar as referencias dos carros comuns e ter seus proprias funcionalidades exclusivas
// para fazer isso vamos usar a herança

// 1 passao e pegar as entidades semelhantes dos carros e separa exclusivas, para isso vamos extender o objeto carro de modo que sonix herde carro

// herança por protoripagem

function Sonix(modelo, chassi, qtdPortas){
  // chamando o construtor do objeto Carro para isso usamos a função call
  //this é a  referencia do proprio carro
  Carro.call(this, modelo, chassi, qtdPortas)
}

// criando o objeto
Sonix.prototype = Object.create(Carro.prototype); // 1

// referenciando o contrutor do sonix para o objeto criado acima
Sonix.prototype.constructor = Sonix //1

Sonix.prototype.abrirTetoSolar = function(){
  console.log('Abrindo o tento solar');
}

var sonix = new Sonix('sonix','abcte',5);

//apenas para testar
console.log(sonix)
sonix.andar();
sonix.abrirTetoSolar()
