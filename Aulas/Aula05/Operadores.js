/**
 * Operadores :
 * 
 * 1 - Aritméticos
 * 
    * fAdição/Concatenação = %
    * Subtração = -
    * Multiplicação = *
    * Potenciação = **
    * Divisão = /
    * Resto da divisão = %
 * 2 - Incremento 
 * 
 *  Incremento = ++
 *  Decremento = --
 * 
 * 3 - Atribuição
 */


const valorA = 10;
const valorB = 2;

// Adição
console.log(`${valorA} + ${valorB} = ${valorA + valorB}`);

// Subtração 
console.log(`${valorA} - ${valorB} = ${valorA - valorB}`);

//Multiplicação
console.log(`${valorA} * ${valorB} = ${valorA * valorB}`);

// Divisão 
console.log(`${valorA} / ${valorB} = ${valorA / valorB}`);

// Pontenciação
console.log(`${valorA} ** ${valorB} = ${valorA ** valorB}`);

// Resto da Divisão
console.log(`${valorA} % ${valorB} = ${valorA % valorB}`);


// Incremento | não pode com const
let contador = 1;
contador++;//pós-incremento

console.log(contador); 

++contador; //pré-incremento
console.log(contador);

let contadorB = 10;

//pre-decremento
console.log(--contadorB); // valor = 9

// pos-decremento
console.log(contadorB--); //valor = 9 ; depois vira 8
console.log(contadorB);

// Atribuição  ( Pode ser feito com qualquer operador aritmético)
let contadorC = 0;
contadorC += 50; // contadorC = contadorC + 50

console.log(contadorC);


// Conversão de String para Number
let num1 = 10;
let num2 = '5.2';

console.log(num1 + num2);

num2 = parseInt(num2);
console.log(num1 + num2);

