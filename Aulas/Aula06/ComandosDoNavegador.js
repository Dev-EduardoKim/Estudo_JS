/**
 * 1 - alert()
     * Abre uma caixinha com uma mensagem e um botão OK. Só isso. O usuário não pode fazer nada além de fechar.
     * 
     * Sempre retorna **Undefined**
 * 2 - confirm()
     * Abre uma caixinha com uma mensagem e dois botões: Ok e Cancelar.
     * 
     * Sempre retorna um valor boolean
 * 3 - prompt()
     * Abre uma caixinha com uma mensagem e um campo para digitar texto.
     * 
     * Sempre retorna um valor String, mesmo que o usuário digite um número.
 */

let alerta = alert('Abre uma caixinha com uma mensagem.');

console.log(alerta)

let confirmar = confirm('Abre uma caixinha com uma mensagem e dois botões : Ok e Cancelar (true ou false). Entendeu ?');

console.log(confirmar);

let perguntar = prompt('Abre uma caixinha com uma mensagem e um campo para digitar texto.');

console.log(perguntar);


