function validarParentesses(parenteses){
   var arrayParenteses = parenteses.split("");
   
   var balanceamento = arrayParenteses.reduce(function(par, parenteses){
    if(par < 0){
        return par;
    }

    if(parenteses === '('){
       return par + 1;
    }

    if(parenteses === ')'){
        return par -1
    }
   },0);

 var valida = true;
   
   if(balanceamento !== 0){
       valida = false;
   }

   console.log(valida);
}


var valida = validarParentesses("()()()()")

