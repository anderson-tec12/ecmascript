// O Set é uma estrutura de dados que nos permite ter listas com valores que nunca se duplicam e que mantém a ordem de inserção dos seus itens.
// musicas disponiveis
var musica_1 = {titulo: "Sem você meu coração é null", autor: " Oracle"}

var musica_2 = {titulo: "Meu coraçãão éé componentizado", autor: " React"}

var musica_3 = {titulo: "Tudo isso éé tão dinamico", autor: " JavaScript"}

var musica_4 = {titulo: "Não me chame depois", autor: " Node"}

var musica_5 = {titulo: "No amor não existe roolback", autor: " Sql"};

var playlist = new Set([musica_4]);

// feature


// adicionar uma musica
  playlist.add(musica_1);
  playlist.add(musica_3);
  playlist.add(musica_4);

// remover uma musica 
  playlist.delete(musica_1);

// remover todas as musicas 
  playlist.clear();

// adicionar uma musica que ja esta na playlist 
    playlist.add(musica_1);
    playlist.add(musica_3);

    playlist.add(musica_1);
// ver quantas muscicas estãão na playlist

for(son of playlist){
  console.log(son);
}
console.log(playlist.size);