const Usuario ={
  nome: "Anderson",
  sobrenome:'Barros silva',
  senha:'mrrobot',
  email:'elliot.alderson@gmail.com',
  profissao: 'Anlista de TI',
}
// pegandodados do objeto
const {email, nome, senha} = Usuario;
const {cartao} = Usuario
console.log(email)
console.log(nome)
console.log(senha)
console.log(cartao)// pois não tem

//antes

var antesEmail = Usuario.email;

console.log(antesEmail);
