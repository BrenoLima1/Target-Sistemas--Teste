/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

const valor = prompt("Forneça um valor inteiro: ");
const sequencia = [];

//Calculando a sequência de Fibonacci passando o valor por argumento
function fibonacci(valor) {
  if (valor < 0) return null;
  if (valor < 2) return valor;

  return fibonacci(valor - 1) + fibonacci(valor - 2);
}

for (let i = 0; i <= valor; i++) {
  sequencia.push(fibonacci(i));
}
console.log(`A sequência de Fibonacci de tamanho ${valor} é :
        ${sequencia}`);

sequencia.find((e) => e == valor)
  ? console.log(`${valor} pertence à sequência de Fibonacci. 👍`)
  : console.log(`${valor} não pertence à sequência de Fibonacci. 👎`);
