const entrada = require('readline-sync')

const pecasciclo= entrada.questionInt(' digite a quantidades de peças por ciclo:');

let acumulador=0;

  for(let ciclo=1; ciclo<=10; ciclo++){
 acumulador += pecasciclo;
 console.log(`ciclo ${ciclo}: ${acumulador} peças`) }

