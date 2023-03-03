//escopo de funãção e escopo de bloco
// ecma6 não se usa var temos o let
// var usa o escopo de funcao
// let usa o escopo de bloco 

var msg = "ola";
{
  var msg = 'Adeus';
}

console.log(msg);

console.log('Diferença de LET e VAR');

var arrayVar = [];

for(var i = 1; i < 5; i++){
  arrayVar.push(function() {
    console.log(i);
  });
}

var arrayLet = [];

for(let i =1; i < 5; i++){
  arrayLet.push(function(){
    console.log(i);
  })
}

console.log('Vai la var');

arrayVar.forEach(function(funcao){
  funcao();
})

console.log('agora o let');

arrayLet.forEach(function(funcao){
  funcao();
})