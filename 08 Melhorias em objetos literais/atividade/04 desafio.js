let dados = new Map();

dados.set('nome','Anderson Barros silva');
dados.set('idade', 26);

//console.log(dados);


const criaObjetoComCaracteristicas = (nome, idade) =>{
  var pessoa = {
    nome,
    idade
  }

  return pessoa;
}

let client = criaObjetoComCaracteristicas(dados.get('nome'), dados.get('idade'));

console.log(client)
