const Usuario ={
  nome: "Anderson",

}
// criando uma label chamdode rotulo
const {nome:apelido} = Usuario;
console.log(apelido)


const suco ={
  sabor: 'uva',
  quantidade: '500ml'
}

const doce ={
  tipo:'açucar'
}

function descreveSuco({sabor, quantidade},{tipo}){
  return `Este suco é de ${sabor} e possui ${quantidade} adocicado com ${tipo}`
}

descreveSuco(suco, doce)
