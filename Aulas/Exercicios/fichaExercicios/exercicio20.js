/**
 *  Desafio final: Você é dono de uma loja. Crie variáveis para: nomeProduto, precoCusto, porcentagemLucro. Calcule e mostre o preço de venda com o lucro incluído.
 */

let nomeProduto = 'Mochila para viagem' ;
let precoCusto = 249.99;
let porcentagemLucro = 0.17; // 17% de comissão

const valorComissao = precoCusto * porcentagemLucro; // Valor da comissão 
const valorTotal = precoCusto + valorComissao // Valor Total

console.log(`O valor do produto R$${nomeProduto}`);
console.log(`O valor da comissão é de R$${valorComissao.toFixed(2)}`);
console.log(`Mas o seu valor total é de R$${valorTotal.toFixed(2)}`);

