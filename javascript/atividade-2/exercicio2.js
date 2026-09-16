const entrada= require('readline-sync');

const temperatura= entrada.questionFloat('digite a temperatura: ')

let situacao;

if (temperatura <=60){
  situacao = "normal"
}else if (temperatura<=80){
  situacao = 'atenção'
}else{
situacao = 'critico'
}

console.log (`\n ----relatorio de temperatura`);
console.log(`temperatura: ${temperatura}°C`);
console.log(`situacao: ${situacao}`)