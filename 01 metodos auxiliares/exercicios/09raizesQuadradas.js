function calculaRaizesQuadradas(raizes){
    return raizes.map(function(raiz){
        var qa = Math.sqrt(raiz);

        return qa;
    })
}

var numeros = [4,16, 36];

calculaRaizesQuadradas(numeros);