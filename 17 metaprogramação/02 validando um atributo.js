// obejtivo ter certeza que o usuario vai prencher o campo com um numero qualquer outra coisa gera erro

const validador ={
  set(alvo, propriedade, valor){
    if(propriedade === 'idade'){
      if(!Number.isInteger(valor)){
        throw new TypeError('A idade não é um numero');
      }
    }
    alvo[propriedade] = valor;
  }
}

const usuario = new Proxy({}, validador);
usuario.idade = 10;

console.log(usuario.idade)