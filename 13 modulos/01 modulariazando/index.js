// modularizar e separar um pedaço do codigo uma funcionalidade e reaproveitalo
// commonJs e AMD

// dois tipos

// padrão
// qualvalor deve ser considerado na exportação ou seja um valor default a ser exportado

// nomeado
// e para ser consumida aos pedacinhos, um a função uma variavel

// importando
import {comprimento, area,PI} from 'circuferencia.js';
console.log(comprimento(2));
console.log(raio(2));
console.log(PI);

// ou

import * as teste from 'circuferencia.js';
console.log(teste.comprimento(2));
console.log(teste.raio(2));
console.log(teste.PI);
