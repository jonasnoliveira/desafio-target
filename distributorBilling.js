const fs = require('fs/promises');

const getNumber = async () => {
  const data = await fs.readFile("./dados.json", {
    encoding: 'utf8'
  });

  const values = JSON.parse(data).map((object) => object.valor);
  const biggerValue = Math.max.apply(Math, values);
  const smallerValue = Math.min.apply(Math, values);
  let sum = 0;
  let highestAverageValue = 0;

  let businessDay = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (values[i] > 0) {
      businessDay += 1;
    }
  }

  const averageValue = sum / businessDay;

  for (let i = 0; i < values.length; i++) {
    if (values[i] > averageValue) {
      highestAverageValue += 1;
    }
  }

  console.log(`O maior valor é: ${biggerValue}`)
  console.log(`O menor valor é: ${smallerValue}`)
  console.log(`A soma dos valor é: ${sum}`)
  console.log(`A média dos valor é: ${averageValue}`)
  console.log(`Dias que o valor da diária é maior que a média mensal: ${highestAverageValue}`)
}

getNumber();