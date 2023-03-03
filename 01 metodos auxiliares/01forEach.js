// OBJETIVO  = LISTAR OS NOMES CONTIDOS NO ARRAY NO CONSOLE.LOG

// CRIANDO O ARRAY
var nomes = ["Anderson", "Mivane", "Raphael"];

//  percorrendo o array e exibindo os nomes
for(var i = 0 ; i < nomes.length; i++){
	console.log(nomes[i]);
}


//  NOVA MANEIRA
nomes.forEach(function(ator){
	console.log(ator);
})

// foreach so para exibir valores sem alterar

// OBJETIVO = Adicionar um item ao array e exibir usando o forEach

let canais = ['sbt', 'globo', 'record'];

canais.forEach(function(canal){
	canais.push('cultura');
	console.log(canal)
})