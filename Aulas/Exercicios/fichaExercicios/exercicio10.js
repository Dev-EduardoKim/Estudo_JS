/**
 * Crie uma variável preco = 50 e uma variável desconto = 10. Mostre no console o preço final após o desconto.
 */

let precoProduto = 50.0;
const DESCONTO = 0.1;

let precoFinal = precoProduto - (precoProduto * DESCONTO);

console.log(`Valor Final : R$${precoFinal.toFixed(2)}`);

