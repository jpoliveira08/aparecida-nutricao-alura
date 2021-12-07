var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    //Fazendo uma requisicao com o JavaScript para acessar detemrinada url e buscar os dados da mesma
    //Neste caso iremos trabalhar com uma simples API, a qual é simplesmentes uma interface de programacao que vai disponibilizar os dados para nos
    //Para isso vamos utilizar o xml-http request

    var xhr = new XMLHttpRequest();
    //Precisamos ensinar este objeto a fazer as requisicoes da maneira mais adequada para nos

    //Fazendo a requisicao para a API, primeiro devemos especificar qual sera a requisicao
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //enviando a requisicao
    xhr.send();

    //Precisamos criar um Evento para analisar a resposta da requisicao
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        /**
         * Tratando possíveis erros de requisições
         */
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            //Imprimindo a resposta da requisicao
            //O retorno que temos é um json, um jeito de transportar pela web um formato de dado muito parecido com objeto do JS
            //Precisamos converter esse JSON em um array de objetos
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
});