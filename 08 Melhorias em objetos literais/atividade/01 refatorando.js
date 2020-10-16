const modelo = 'Mercedes-Benz Monobloco O-371 RSL';
const ano = 1993;
const capacidade = 50;

const acelerar = function() {
  console.log('vrum vrum');
}

const busao = {
  modelo,
  ano,
  capacidade,
  acelerar
}

busao.acelerar(); // vrum vrum
console.log(busao)
