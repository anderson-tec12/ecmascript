const listaMae = ['leite', 'ovos', 'papel'];
const  listaEsposa = ['arroz','feijão', 'suco'];
const listaEscritorio =['papel a4', 'caneta', 'clips de papel']

// juntando arrays
const listaCompras = listaMae.concat(listaEsposa, listaEscritorio);

console.log(listaCompras);

//com ecma script 6 spread
// spread trata os itens do array de forma indivudual

console.log()

const lista = [...listaEscritorio,...listaEsposa, ...listaMae];

console.log(lista);
