/**
 * Iremos filtrar a cada letra inserida pelo usuario
 * Para isso, vamos utilizar um escutador de evento de input
 */

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //Criando uma express'ao regular para buscar na tabela de acordo com oque o usuario ja digitou
            //Passaremos duas coisas na instancia deste objeto (oque queremos buscar, como queremos realizar a busca)
            var expressao = new RegExp(this.value, "i");
            //Agora precisamos esconder tudo que for DIFERENTE de this.value
            //Parametro da RegEx(texto que deve ser buscado, flags, como queremos que a expressao regular busque)
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
/**
 * Também podemos realizar a comparação sem utilizar expressao regulares
 * Utilizando subString, a qual devolve parte de uma string de acordo como intervalor (inidice inicial, indice final)
 * var string = "Alura";
 * var resultado = string.substring(1, 4);
 * No exemplo acima, extraimos uma string que comeca no indice 1 e termina no indice 4
 * 
 * Para deixar tudo minusculo em JS, utilizar .toLowerCase();
 */