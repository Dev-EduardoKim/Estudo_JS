/**
 * 1 - Strings
 * 2 - Number
 * 3 - Number Real
 * 4 - Vazio ( Undefined )
 * 5 - Nulo 
 * 6 - Boolean ( true or false)
 * 7 - symbol -> Ver depois , pois é avançado
 */

const NOME = 'Eduardo'; // 1
const NUM = 10; // 2
const NUM_R = 10.52;// 3

// Não apontam para local nenhuma da memória
let valorVazio; // 4 ==> Existo mas nunca recebi um valor
let valorNulo = null ; // 5 ==> Existo e estou vazio de propósito 
let valorLogico = true; // 6

// Verificar o tipo , usamos o typeof()

console.log(typeof(valorLogico), valorLogico);

console.log(typeof valorNulo , valorNulo); // Bug histórico






