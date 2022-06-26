/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

let string = prompt('Digite um texto');
let reverseString = [];
let novaString;


let j = 0;
for(let i = string.length; i >= 0; i--){
    reverseString[j] = string[i];
    j++;
}


string = '';
for (const r of reverseString) {
    if (r !== undefined) 
    string += r;
}

console.log(string);
