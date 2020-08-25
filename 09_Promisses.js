const fs = require('fs');

console.log('INÍCIO!');

const lerArquivo = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, content) => {
    if(err)
      reject('ERRO');
    else
      resolve(content);
  });
});

lerArquivo('arquivo.txt').then(content => {
  console.log(String(content));
});

mostraResultado();
console.log("FIM")
