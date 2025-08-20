const readfile = require("node:readline");
const terminal = readfile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(pergunta) {
  const promessa = new Promise(function (resolve, reject) {
    terminal.question(pergunta, function (valor) {
      resolve(valor);
    });
  });
  return promessa;
}

question("Qual seu nome? \n")
  .then(function (nome) {
    console.log("Nome: " + nome);
  })
  .catch(function (error) {
    console.log("Deu error " + error);
  })
  .finally(function () {
    terminal.close();
  });

