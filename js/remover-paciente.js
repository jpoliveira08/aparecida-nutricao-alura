var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         /**
//          * Para acesssar o elemento que o evento esta atrelado
//          * Utilizados this, executa acao para o elemento dono do evento
//          */
//         this.remove();
//     });
// });

/**
 * Eventos sao como bolhas
 * Ao clicar no elemento filho, o evento passa por todos elementos pais ate chegar no body
 * Por exemplo, ao clicar em um td, conseguimos escutar o evento em tr->tbody->table->container etc..
 * Para contornar esta situacao podemos delegar o evento de escutar somente para o evento pai, afim de otimizar o codigo
 * 
 */
/**
 * Adicionando o escutador de evento no elemento pai
 */
tabela.addEventListener("dblclick", function(event){
    /**
     * Descobrindo qual elemento filho foi clicado
     * passando o argumento event na funcao anonima
     * Para descobrir o elemento clicado a com evento, utilizamos event.target
     * this -> Dono do evento
     * target -> Quem sofreu o evento em si
     */
    /**
     * Para pegar o elemento pai do elemento que foi clicado
     * utilizamos parentNode
     */
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // tr = paciente
    paiDoAlvo.classList.add("fadeOut");

    /**
     * Funcao criada afim de esperar o tempo da classe fadeOut, antes de remover.
     */
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

});