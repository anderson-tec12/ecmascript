// deestruturando arrays
const cores = ['azul', 'vermelho', 'verde', 'amarelo'];

const [cor1,,,cor2,cor3] = cores;

console.log(cor1,cor2,cor3);

console.log(' ')

const contatos = [
  {
    nome:'Alex',
    numero:'1111-1111'
  },
  {
    nome:'Carolina',
    numero:'1111-1112'
  },
  {
    nome:'Fernando',
    numero:'1111-1113'
  }
];

const[,Carol] = contatos;

console.log(Carol);

function mostraNumero({numero}){
  console.log(numero)
}

mostraNumero(Carol);

// pasando direto o array
function mostraNumeroCarol([, {numero}]){
  console.log(numero)
}

mostraNumeroCarol(contatos);
