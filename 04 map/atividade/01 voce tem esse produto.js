// ## Exercício 1 - Você tem esse produto?
// Crie um método chamado `possuiProduto` que recebe dois parâmetros:
// - produtos: Mapa com nome e preço dos produtos (ex: 'Feijão: 2.30')
// - produtoDesejado: String que representa o nome do produto desejado

// Faça com o método retorne `true` caso o produto esteja contido no mapa, caso contrário, devolva `false`.

// Considere o mapa a seguir:
// ``` javascript
var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

function possuiProduto(produtos, produtoDesejado){
  if(produtos.get(produtoDesejado) === undefined){
    return false;
  }

  return true;
}


var verificando = possuiProduto(produtos, 'manteiga');
console.log(verificando)