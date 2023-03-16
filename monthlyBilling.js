const readline = require('readline-sync');

const sp = 64836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53
const sum = sp + rj + mg + es + outros;

var state = readline.question('Digite o estado que deseja saber a porcentagem do faturamento: ');
var porcent = 0;

switch (state) {
  case 'sp':
    porcent = (sp * 100) / sum;
    break;
  case 'rj':
    porcent = (rj * 100) / sum;
    break;
  case 'mg':
    porcent = (mg * 100) / sum;
    break;
  case 'es':
    porcent = (es * 100) / sum;
    break;
  case 'outros':
    porcent = (outros * 100) / sum;
    break;
}

console.log(`${state} tem ${porcent.toFixed(4)}% do faturamento total: ${sum}`);