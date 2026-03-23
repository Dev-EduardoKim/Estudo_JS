/**
 * Use `prompt()` pra pedir um número. Mostre no console o **tipo** do que foi retornado. Depois converta pra número com `Number()` e mostre o tipo novamente.
 */

let pegarNumero = prompt('Digite um número : ');

console.log(typeof pegarNumero);

pegarNumero = Number(pegarNumero);

console.log(typeof pegarNumero, pegarNumero);