let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(function(palavrao){ return palavrao.length });

console.log(tamanhos);

const quantidades = (palavroes) =>{
  palavroes.map(palavrao =>{
    console.log(palavrao.length);
  })
}

quantidades(palavroes)
