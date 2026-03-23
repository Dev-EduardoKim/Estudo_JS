/**
 *  REGRAS PARA DECLARAR O NOME DA CONSTANTE :
 * 
 * 1 - Não pode criar constante com palavras reservadas ( da linguagem ).
 * 2 - Precisam ter nomes significativos( ex: nomePai ,nomeMae, nomeFilho, dataCasamento) [DICA !!!]
 * 2.1 - Crie o nome da constante em CAPSLOCK para diferenciar das variáveis. [DICA !!]
 * 3 - Não pode começar o nome de uma CONSTANTE com número ( ex: 9formasUso)
 * 4 - Não pode conter espaços ou traços, pode o underline.
 * 5 - Usamos o camelCase.
 * 6 - Case-sensitive = Letra Maiuscula e letra minuscula tem diferença.
 */

// valor da constante não muda , fica salvo na memória da forma que foi inicializada
const PI = 3.14;

// valorPi = 3.15; --> vai ter erro (Assignment to constant variable.)

let value = 55;

console.log(value + PI); // adição
console.log(value - PI); // subtração
console.log(value * PI); // multiplicação
console.log(value / PI); // divisão

let firstName = 'Eduardo';
let lastName = 'Kim';
let otherName;
// identificar o tipo da variável ou constante

console.log(typeof(value)); // number
console.log(typeof(firstName)); // String
console.log(typeof(firstName + lastName)); // Sequencia de Strings
console.log(typeof(otherName)); // Undefined