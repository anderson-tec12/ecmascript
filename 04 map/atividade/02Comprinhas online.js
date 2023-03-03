// ## Exercício 2 - Comprinhas online
// Implemente o método 'calculaValorTotalDaCompra' que recebe quatro parâmetros:
// - produtos: Lista com o nome dos produtos comprados
// - cidade: String que representa o nome da cidade
// - caixa: Mapa que contém relação de produtos e preços
// - fretes: Mapa que contém relação de cidades e fretes

// Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:

// Produtos:

// |Produto|Preço|
// |----|----|
// |Arroz|7.10|
// |Feijão|2.30|
// |Macarrão|4.70|
// |Refrigerante|3.00|

// Fretes:

// |Cidade|Frete|
// |----|----|
// |São Paulo|10.10|
// |Rio de Janeiro|12.30|
// |Brasília|14.70|
// |Outros|13.00|

// * Exemplo: calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes) → 7.20

var caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

var cidades = new Map();
cidades.set("Sao Paulo", 10.10);
cidades.set("Rio de Janeiro", 12.30);
cidades.set("Brasilia",14,70);
cidades.set("outros", 13.00);

var cidade = "Brasilia";
var produtos = ['Refrigerante','Macarrão'];

function calculaValorTotalDaCompra(produtos,cidade,caixa,cidades){
  var frete = 0;
  var valor = 0;

  for(produto of produtos){
    valor += caixa.get(produto);
  }

  if(cidades.get(cidade) === undefined){
    frete = cidades.get('outros');
  }else{
    frete = cidades.get(cidade);
  }

  return frete+valor;
}

var compra = calculaValorTotalDaCompra(produtos,cidade,caixa,cidades);
console.log(compra)