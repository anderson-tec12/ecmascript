function calculaPotencia(x = 2,y = x){
  console.log(Math.pow(x,y));
}

calculaPotencia();
calculaPotencia(3);
calculaPotencia(3,2);

const v = 'valor 1';


function funcao(x = v){
  console.log(x);
}

funcao();

function exibeNome(nome, callback = z =>{
  console.log('imprimeindo ',z, ' via função anonima');
}){
  callback(nome);
}

exibeNome('muriel');
exibeNome('muriel', nomeRecebido => {
  console.log('nome recebido ',nomeRecebido)
})
