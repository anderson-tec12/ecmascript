function montaEndereco(rua, cidade, numero, cep){
  let endereco = `${rua}, ${numero} - ${cidade}, ${cep}`;
  return console.log(endereco);
}

let rua = 'João alves da silva';
let cidade = 'Diadema';
let numero = 49;
let cep = '09980-580';

let endereco = montaEndereco(rua, cidade, numero, cep);
