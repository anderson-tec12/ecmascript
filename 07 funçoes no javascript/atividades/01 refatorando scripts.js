let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}

// refatorando

console.log('');
console.log('refatorando')
console.log('');

const imprimeProduto2 =  (produtos) => {
  produtos.forEach(produto => {
    console.log(`Produto:${produto.nome} | Preço: ${produto.preco}`)
  })
};

imprimeProduto2(carrinho);
