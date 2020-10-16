// horas das comprinhas
console.log('ecma5 *****');
var nome = 'Anderson';
var idade = 26;
var rua = 'João Alves';

var div = '<div>';
div += '<p><b>Nome:</b>'+ nome +'</p>';
div += '<p><b>Idade:</b>'+ idade +'</p>';
div += '<p><b>Endereço:</b>'+ rua +'</p>';

console.log(div);

console.log('ecma6 *****');

const div2 = `
<div>
  <p><b>Nome:</b> ${nome}</p>
  <p><b>Idade:</b> ${idade}</p>
  <p><b>Endereço:</b> ${rua}</p>
`;

console.log(div2);
