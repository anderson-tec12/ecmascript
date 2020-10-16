
class VideoGame{
  constructor(marca, nControles, tipoMidia){
    this.marca = marca;
    this.nControles = nControles;
    this.tipoMidia = tipoMidia;
  }
};

var playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
