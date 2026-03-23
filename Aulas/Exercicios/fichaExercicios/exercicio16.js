/**
 * . Um produto custa R$200. Tem um aumento de 15%. Calcule e mostre o novo preço. (dica: 15% = 15/100)
 */

let precoProduto = 200;
const AUMENTO_PRECO = 0.15;

const calculoAumentoProduto = precoProduto + (precoProduto * AUMENTO_PRECO);

console.log("O novo preço do produto é R$" + calculoAumentoProduto);