
function existeProdutosDatados(produtos, dataReferencia){
   return  produtos.some(function(produto){
        return produto.dataValidade == dataReferencia
    })
}

var produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]

existeProdutosDatados(produtos,'21/02/2017');