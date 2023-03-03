// desenvolva aqui seus códigos para os exercícios
import {nome, chave, lg} from './src/config.js';
import Telefone from './src/classes.js';
import printerjs  from './src/printer.js'

lg(nome); //exe 1
lg(chave); //exe2

//exe3

const aparelho = new Telefone('celular','94045-7234');
lg(aparelho);
lg(aparelho.modelo);
lg(aparelho.numero);


printerjs('vamos nessa');
