const usuario = {
  nome: 'Anderson',
  email: 'anderson.tec12@gmail.com',
  idade: 26
};

// const email = usuario.email;
// const nome = usuario.nome;
// const idade = usuario.idade

const {email, nome, idade} = usuario;

console.log(`email:${email}, Nome:${nome}, Idade:${idade}`)
