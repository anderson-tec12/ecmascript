// sistema para localizar os livros

var livros = [
  { titulo: "O pode do habito", autor: "Charles Duhigg", local: "A1" },
  { titulo: "Como fazer amigos", autor: "Dale Carnegie", local: "D2" },
  { titulo: "Geração de valor", autor: "Flavio", local: "L3" },
];

// criando o mapa
var estantes = new Map();

// populando a estantes
for (livro of livros) {
  estantes.set(livro.titulo, livro.local);
}

function getLocalizaLivro(titulo) {
  var estante = estantes.get(titulo);
  if (estante === undefined) {
    return "livro não encontrado no acervo";
  }

  return estante;
}

var local = getLocalizaLivro("o pode");
console.log(local);
