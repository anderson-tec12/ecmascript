function busca(propriedade, valor, lista){

    var lista = [
        { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
        { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
        { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
        { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
    ];

    var procura = lista.find(function(dados){
       
        return dados[propriedade] === valor;
    });

    return procura;

   
}
console.log(busca('nome', 'Erick', 'lista'));


