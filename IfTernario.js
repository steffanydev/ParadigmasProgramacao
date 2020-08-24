function podeEntrar(idade) {
   return idade > 17 ? "Pode entrar!" : "Não pode entrar!";
}

const msg = podeEntrar(20);
console.log(msg);
