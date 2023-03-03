// refatorndo com ecma6

//crando uma class
class Carro {

  // vamos criar o construtor, atraves dele que passar as caracteristicas do objeto
  constructor(modelo,chassi,qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }

  andar(){
    console.log('vrum vrum');
  }
}

// para extender sonix a class Carro usamos a palavra extends nomeDaClasse a qual queremos extender

class Sonix extends Carro{
  // pegando os atributos corretamente do objeto pai
  constructor(modelo,chassi,qtdPortas){
    // super palavra reservada para referencia as propriedades do pai'
    super(modelo,chassi,qtdPortas);
  }

  abrirTetoSolar(){
    console.log('Abrindo o teto solar');
  }
}

const carroBasico = new Carro('baisco', '1234', 2);
console.log(carroBasico);

const sonix = new Sonix('Sonix', 'edition123', 5);
console.log('');
sonix.andar();
sonix.abrirTetoSolar();
console.log('');
console.log(sonix.modelo, sonix.chassi, sonix.qtdPortas)
