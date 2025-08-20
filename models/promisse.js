const readFile = require("node:readline");
const terminal = readFile.createInterface({
  input:process.stdin,
  output: process.stdin,
});

// terminal.question("qual seu nome: \n",ction (valor){
//   console.log("seja bem vindo" + valor);function (valor){
//   console.log("seja bem vindo" + valor);
// });

function question(pergunta) {
  return new Promise(function (resolve, reject){
    terminal.question(pergunta,function(valor){
      resolve(valor)
    });
  });
  return promrssa;
}
question("qual seu nome? \n")
  .then(function(nome){
  console.log("nome:" + nome); 
})
catch(function (erro){
  console.log("deu error " + error);
})
.finally(function (){
  terminal.close();
});