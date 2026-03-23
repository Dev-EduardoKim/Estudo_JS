// Entendendo Variáveis ( let ) 

// Variável = Valor salvo na memória em tempo de execução, ou seja , temporário.

/**
 *  REGRAS PARA DECLARAR O NOME DA VARIÁVEL :
 * 
 * 1 - Não pode criar variáveis com palavras reservadas ( da linguagem ).
 * 2 - Precisam ter nomes significativos( ex: nomePai ,nomeMae, nomeFilho, dataCasamento) [DICA !!!]
 * 3 - Não pode começar o nome de uma variável com número ( ex: 9formasUso)
 * 4 - Não pode conter espaços ou traços, pode o underline.
 * 5 - Usamos o camelCase.
 * 6 - Case-sensitive = Letra Maiuscula e letra minuscula tem diferença.
 * 7 - O var está obsoleto , não serve. Use o LET
 */
/**
 * João nasceu em 1984
 * Em 2000 João conheceu Maria
 * João casou-se com Maria em 2012
 * Maria teve um 1 filho com João em 2015
 * O filho de João se chama Eduardo.
 */
let nomePai = 'João'; // String
let nomeMae = 'Maria'; // String
let nomeFilho; // Variável vazia

console.log(nomePai,'nasceu em 1984.');
console.log('Em 2000 ', nomePai , ' conheceu ',nomeMae);
console.log(nomePai,' casou-se com ', nomeMae,' em 2012');
console.log(nomeMae,' teve',1,' filho com ', nomePai, ' em 2015');

nomeFilho = 'Eduardo';
console.log('O filho de ',nomePai,' se chama ',nomeFilho,'.');
