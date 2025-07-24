
const fs = require('node:fs')

fs.readFile("./arq1.txt", function(erro, resposta){
  console.log("error", erro);
  console.log("resposta", resposta.toString());
})

console.log("FIM");