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

const carroBasico = new Carro('baisco', '1234', 2);
console.log(carroBasico)
