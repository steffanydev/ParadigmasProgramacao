function minhaFuncao(callback){
  const valor = 70;

  callback(valor);
};

minhaFuncao(function(numero){
  const plus = numero + 30;
  console.log("Resultado: " + plus);
})

function soma(v1, v2, callback){
  const resultado = v1 + v2;

  callback(resultado);
}

const retorno = soma(20, 30, (resultado) => {
  console.log("O resultado devolvido foi: ", resultado);
});

console.log(retorno);
