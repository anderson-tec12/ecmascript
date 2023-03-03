function removeDuplicadas(numeros){
    return  numeros.reduce(function(anterior, numero){
         var verificaDuplicidade = anterior.find(function(numero2){
           return  numero === numero2;
         });
 
         if(!verificaDuplicidade){
             anterior.push(numero);
         }
 
         return anterior;
         
     }, [])
 }
 
 removeDuplicadas([1,1,2,2,3,3,4,5])