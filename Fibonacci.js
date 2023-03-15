const readline = require('readline-sync');

var numero = readline.questionInt('Digite que deseja encontrar na sequencia de Fibonacci: ');

function Fibonacci(numero) {
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

  if(arr.includes(numero)){
    console.log(numero, 'Contem na Sequencia de Fibonacci.')
  }else{
    console.log(numero, 'Não contem na sequencia de Fibonacci.')
  }
}
Fibonacci(numero);