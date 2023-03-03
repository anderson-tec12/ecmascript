// ## Exercício 2 - Tem alguém ai?
// // Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista de números inteiros qualquer e retorna o valor `true` caso esta lista não tenha nenhum item e `false` para os demais resultados. A lógica deve ser feita usando somente a propriedade `done` do objeto que é obtido ao executar o `next` no iterador do array.

function isListaVazia(lista){
    var iteradorLista = lista[Symbol.iterator]();
    var itemLista = iteradorLista.next();

    if(!itemLista.done){
        return console.log(true);
    }else{
        return console.log(false);
    }
}

var numeros = [1,2,3];

isListaVazia(numeros);