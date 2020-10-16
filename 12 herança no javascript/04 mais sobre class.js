// diferenças de funcion contructor para class
// a class perdeu orest logo primeiro cria a class depoi podemos chamar
// ja no funcion a ordem é indiferente

const bike = new Veiculo('bike');
console.log(bike.tipo);

function Veiculo(tipo){
  this.tipo = tipo;
}

// agora class

// const car = new Carro('fusca'); da erro aqui
// console.log(car.modelo); da erro aqui

class Carro{
  constructor(modelo){
    this.modelo = modelo;
  }
}

const car = new Carro('fusca');
console.log(car.modelo);

// podemos passar as classes por expresão

const Tecnico = class{
  constructor(tipo){
    this.tipo = tipo;
  }
}

const tec = new Tecnico('Informatica');
console.log(tec.tipo);

// metodos estaticos


class Automovel{
  static abrirPorta(){
    console.log('Abrir a porta');
  }

  static fechaPorta(){
    console.log('Fechar a porta');
  }
}
// para incocar metodos estaticos não precismos invocar um objeto logo
Automovel.abrirPorta()
Automovel.fechaPorta()
