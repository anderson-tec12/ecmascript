// duas maneiras de criar objetos
// funçoes construtoras
// objetos literais

// construtoras
function Livro(titulo){
  this.titulo = titulo;
}

var livro = new Livro('harry Potter');
console.log(livro);

/*
  por debaixo dos panos
  um novo objeto literal é criado
  o construtor do nosso objeto livro é definido como Livro, assim como o seu tipo (que pode ser verificado com o instanceof);
  O prototipo do objeto Livro é definido como Livro.prototype
  è criado um novo contexto  de execução para o objeto
*/

// objeto literais
// são estaticos e unicos mesmo que armazenados em variaveis

var book = {
  titulo: "Anjos e demonios"
}

console.log(book);

var book2 = book;
book2.titulo = 'O codigo da Vinci';

console.log(book);
console.log(book2);

// adicionando ua propriedade

book.autor = 'Anderson barros silva';

console.log(book);

// adicionando propriedades por []

book['mostraLivro'] = function(){
  console.log(this.titulo+', '+this.autor);
}

book.mostraLivro();
