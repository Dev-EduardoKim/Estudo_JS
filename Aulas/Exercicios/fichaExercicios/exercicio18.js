/**
 *  Crie as variáveis saldoBanco = 1500, contaLuz = 150, contaAgua = 80, mercado = 300. Mostre no console o saldo depois de pagar tudo.
 */
let saldoBanco = 1500;
let contaLuz = 150 , contaAgua = 80 , contaMercado = 300 ;
const contaMensal = saldoBanco - (contaLuz + contaAgua + contaMercado);



console.log(`Com todas as contas para pagar, você tem R$${contaMensal} na conta.`);

