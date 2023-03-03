
class VideoGame{
  constructor(marca, nControles, tipoMidia){
    this.marca = marca;
    this.nControles = nControles;
    this.tipoMidia = tipoMidia;
  }
};

class Playstation extends VideoGame{
  constructor(marca, nControles, tipoMidia, USBs, voltagem, adicionais){
    super(marca, nControles, tipoMidia);
    this.USBs = USBs;
    this.voltagem = voltagem;
    this.adicionais = adicionais;
  }
}
var playstation = new VideoGame('sony', '2', 'dvd', 4);
console.log(playstation);
console.log();
const play3 = new Playstation('sony',4,'blueray',4,'110v',['controle sem fio','volante', 'guitarra']);
console.log(play3);
