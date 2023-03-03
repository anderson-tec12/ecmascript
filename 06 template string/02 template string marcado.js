// marcação no template string
// ele nos permite alterar a sainda

const nome = 'Anderson';
const idade = 26;

function marcacao(strings, ...valores){
  console.log(strings[0]);
  console.log(valores[0]);
  console.log(strings[1]);
  console.log(valores[1]);
  console.log(strings[2]);

  return 'Esse valor foi alterado kkk ';
};

var msg = marcacao` Meu nome é ${nome + '!'} e eu tenho ${idade}`;

console.log(msg);
