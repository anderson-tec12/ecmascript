const pontos = [
  [1,2],
  [3,4],
  [5,6]
];

let pontosNovo = []

let pontosTranforma = pontos.map(([x,y]) => {
 let ponto = {
   'x':x,
   'y':y
 };

 pontosNovo.push(ponto);
});
console.log(pontosNovo)
