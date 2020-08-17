function soma(x) {
 return x + 2;
}

var resultado = soma(4);
console.log('O resultado é:', resultado);

console.log();

function dataAtualFormatada() {
  var dia = new Date().getDate();
  var mes = new Date().getMonth() + 1;
  var ano = new Date().getFullYear();
  
  //return dia + '/' + mes + '/' + ano;
  // Interpolação de String
  return `${dia}/${mes}/${ano}`;
}

dataAtualFormatada();

