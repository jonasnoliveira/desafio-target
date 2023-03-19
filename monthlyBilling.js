const readline = require("readline-sync");

const json = [
  {
    state: "sp",
    value: 64836.43,
  },
  {
    state: "rj",
    value: 36678.66,
  },
  {
    state: "mg",
    value: 29229.88,
  },
  {
    state: "es",
    value: 27165.48,
  },
  {
    state: "outros",
    value: 19849.53,
  },
];

const state = readline.question(
  "Digite o estado que deseja saber a porcentagem do faturamento: "
);

const dataValue = json.map((object) => object.value);
const data = json.map((object) => object);
const findState = data.find((p) => p.state === state);
const sum = dataValue.reduce((sum, i) => sum + i);
const porcent = (findState.value * 100) / sum;

console.log(
  `${state} tem ${porcent.toFixed(4)}% do faturamento total: R$${sum}`
);
