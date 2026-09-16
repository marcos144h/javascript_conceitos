const entrada= require(readline-sync)
const peca= entrada.questionInt("qual o peso de uma peça:")
 
let situacao;
if (peca<=95 ){
  situacao= "reprovada"
}else if(peca>=95 && peca<=105){
  situacao= "aprovada"
}
console.log (`\n  --- relatorio das peças----`);
console.log(`peso da peça: ${peca}g`)
console.log(`situação: ${situacao}`)