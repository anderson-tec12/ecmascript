// WeakMap é como o map porem as chaves so pode ser objetos
// neles os elementos sãão fracamente mantidos
// aqui temos apenas HAS,GET, SET e DELETE

var weekmap = new WeakMap();
var elemento1 = {atr:'1'};
var elemento2 = {atr:'2'};

weekmap.set(elemento1, 'sou o elemento1');
weekmap.set(elemento2, 'sou o elemento2');

console.log(weekmap.get(elemento1));
console.log(weekmap.get(elemento2));