const readline = require('readline-sync');

var numero = readline.questionInt('Digite o numero que deseja encontrar na sequencia de Fibonacci: ');

const Fibonacci = (numero) => {
  let aux, numero1 = 0,
    numero2 = 1;
  let arr = [];

  while (numero1 <= 2584) {
    arr.push(numero1);
    aux = numero1;
    numero1 = numero2;
    numero2 = numero1 + aux;
    arr.push(numero2);
  }

  if (arr.includes(numero)) {
    return console.log(numero, 'Contem na sequencia de Fibonacci.');
  }
  return console.log(numero, 'Não contem na sequencia de Fibonacci.');
}
Fibonacci(numero);