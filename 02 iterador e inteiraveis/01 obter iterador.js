// interador é um objeto que sabe acessar um a um os itens de um interavel
// interavel é um array

var videoGames = ['play1', 'play2', 'play3', 'play4','xbox 360', 'xbox one'];
var iteradorVideoGames = videoGames[Symbol.iterator]();
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());
console.log(iteradorVideoGames.next());