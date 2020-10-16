
function calculaAreaTotal(dados){
    return dados.reduce(function(inteirador, soma){
        return + (soma.altura * soma.comprimento);
    }, 0)
}

var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

calculaAreaTotal(dimensoes)