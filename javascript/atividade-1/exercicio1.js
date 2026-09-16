const entrada = require('readline-sync');
const produto= entrada.question('digite o produto:');
const qtdporHora= entrada.questionInt('digite a quantidade por hora:');
const qtdHoras= entrada.questionInt('digite a quantidade de horas:');
const qtdtotal= qtdporHora * qtdHoras

console.log('\n ----- RELATORIO DE PRODUÇÃO----')
console.log(`produto: ${produto}`)
console.log(`quantidade por hora: ${qtdporHora}`)
console.log(`quantidade de horas: ${qtdHoras}`)
console.log(`quantidade total: ${qtdtotal}`)
console.log('\n ----- RELATORIO DE PRODUÇÃO----')