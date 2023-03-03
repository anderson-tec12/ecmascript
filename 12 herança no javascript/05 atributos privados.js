// pricando atributos  com o weakmap

const atributosPrivados = new WeakMap();

class VideoGame{
  constructor(nome, controle, saida, midia){
    atributosPrivados.set(this,{nome, controle, saida, midia});
  }

  retornaPropriedades(atributo){
    return atributosPrivados.get(this)[atributo];
  }
}

const device = new VideoGame('xbox 360', 4,'HDMI', 'DVD');

console.log(device); //não retorna nenhuma informação do objeto
console.log(device.nome); //não retorna a informação mesmo passando a propriedade
console.log(device.retornaPropriedades('nome'));
