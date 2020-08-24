function soma(v1, v2){
  const resultado = v1 + v2;

  return resultado;
}

soma(3, 2);

// Immutable
function soma(v1, v2){
  const add = 100;
  var resultado = v1 + v2;

  const acrescimo = resultado + add;

  return acrescimo;
}

soma(3, 2);
