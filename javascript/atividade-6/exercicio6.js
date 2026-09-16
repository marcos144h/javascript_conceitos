const entrada = require('readline-sync');
let total = 0;
for (let hora = 1; hora<=5; horas++){
  const producao = entrda.questionInt("digite a producao da joras hora"+ hora +":")
  total += producao;
};
const media = total/5;
 console.log(" \n --- relatorio da produção ---");
 console.log(`produção total: ${total} `);
  console.log(`produção média: ${media} `);