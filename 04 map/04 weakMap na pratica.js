// Onde eu uso esse negocio

// para manter o programa protegido de memory leak
// manter dados privados dentro da aplicação

function Pessoa(nome){
    // protegendo o atributo so deve ser chamado pelo metodo
    this._nome = nome;
  }
  
  Pessoa.prototype.getNome = function(){
    return this._nome;
  }
  
  var anderson = new Pessoa('anderson');
  
  console.log(anderson.getNome()); //retorna o nome poela chamada do metodo
  
  console.log(anderson._nome); //nãão era pra retorna
  
  // usando o weekMap
  console.log("############");
  
  var Pessoa = (function(){
    var dadosPrivados = new WeakMap();
  
    function Pessoa(nome){
      dadosPrivados.set(this, {nome: nome});
    }
  
    Pessoa.prototype.getNome = function(){
      return dadosPrivados.get(this).nome;
    }
  
    return Pessoa;
  
  }());
  
  var anderson = new Pessoa('anderson');
  
  console.log(anderson.getNome()); //retorna o nome poela chamada do metodo
  
  console.log(anderson._nome); //nãão era pra retorna
  