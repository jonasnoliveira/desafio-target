const readline = require('readline-sync');

const string = readline.question('Digite uma palavra: ')

const reverseString = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString(string));