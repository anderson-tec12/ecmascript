
//####### ARRAY
// o que é um array, uma variavel com diversos valores
//contendo um indice que representa um valor  

let array = ['Davi', 'Gabriel']

// consuldar um dado do array 
console.log(array[0])

// quantos dados contem o array
console.log(array.length)

/* IF
    Compara dados e de acordo se é true  ou false 
    ele pode retorna uma resposta positiva ou pode 
    apenas ignorar um trecho de codigo

    exemplos
*/

// 1º verificando se é verdadeiro, se for exibir se não ignorar
let msg = false
let txt = true 

if(msg === true){
    console.log('MSG é true') //não é exibido pois msg é false
}

if(txt === true){
    console.log('TXT é true')
}

//2º verifique a idade e exiba se é maior ou não
let idadeDavi = 18
let idadeRaphael = 06
let idadeMiih = 26

if(idadeDavi >= 18){ //faça um teste troque o sinal para >
    console.log('Davi você tem a idade nescessaria')
}else{
    console.log('Davi você não tem idade suficiente')
}

if(idadeRaphael >= 18){ //faça um teste troque o sinal para >
    console.log('Raphael você tem a idade nescessaria')
}else{
    console.log('Raphael você não tem idade suficiente')
}

if(idadeMiih >= 18){ //faça um teste troque o sinal para >
    console.log('Miih você tem a idade nescessaria')
}else{
    console.log('Miih você não tem idade suficiente')
}

/**IF COMPOSTO
 * QUANDO TEMOS UM IF DENTRO DE OUTRO IF
 */

 // exemplo login e senha
//  faça testes troque os dados cadastrados
 let usuarioEmailDigitado = 'anderson'
 let usuarioSenhaDigitado = '123456'

 let emailCadastrado = 'anderson'
 let senhaCadastrada = '123456'

 if(usuarioEmailDigitado === emailCadastrado){
     if(usuarioSenhaDigitado === senhaCadastrada){
         console.log('Seja bem vindo')
     }else{
         console.log('Seu email está certo porem a senha invalida')
     }
 }else{
     console.log('Email não encontrado')
 }



 