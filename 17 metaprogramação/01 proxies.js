class Usuario {
  constructor(login, senha) {
  this.login = login;
  this.senha = senha;
  }
}

const usuario = new Usuario('SuperJS', '123');
console.log(usuario.login); // SuperJS
console.log(usuario.senha); // 123

// criando um proxi para verificar se foi acessado a propriedade de um objeto

//no proxie primeiro passamos o objetodepois a trap
// neste caso a trap usada foi o get
const proxy = new Proxy(usuario, {
  get(alvo, propriedade) {
    console.log(`${propriedade} foi solicitada!`);
    return alvo[propriedade];
  }
});

console.log(proxy.login);
console.log(proxy.senha);