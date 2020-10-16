//map 

var mapa = new Map();
function funcao(){};
var objeto = {};

// inserindo dados em um map pelo set
mapa.set('String', "Isso é uma string");
mapa.set(funcao, "sou uma função");
mapa.set(objeto, "sou um objeto");

// usango o get para consultar pela chave
console.log(mapa.get('String'));
console.log(mapa.get(funcao));
console.log(mapa.get(objeto));

// verificando o tamanho
console.log(mapa.size)

// verifica se a chave ja existe has retorna true ou false
console.log(mapa.has(funcao)) //resultado esperado true
console.log(mapa.has('data')) //resultado esperado false

// map tambem é interavel porem devemos passar as keys para as chave
for(chaves of mapa.keys()){
  console.log(chaves);
}

// map tambem é interavel porem devemos passar as values para os valores
for(valor of mapa.values()){
  console.log(valor);
}

// map tambem é interavel porem devemos passar as entradas para pegar as chaves e valores entries
for(entrada of mapa.entries()){
  console.log(entrada);
}

// deletando a chavedo  usando o delete
mapa.delete(funcao);
console.log(mapa.has(funcao)) //verificando se foi deletado

// deletando todas as chaves
mapa.clear();
console.log(mapa.size) //verificando se foi deletado