/**
 * Este arquivo tem a responsabilidade de trabalhar
 * com qualquer coisa relacionado ao formulario.
 */

 botaoAdicionar.addEventListener("click", function(event){
    //Previnindo o comportamento padrao do browser
    //Neste caso, de recarregar a pagina ao pressionar o botao
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obterPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    if(erros.length != 0){
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    /**
     * Retirando as mensagens de error apos adicionar usuario
     */
    var mensagemErro = document.querySelector("ul");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    /**
     * Esvaziando a ul após imprimir a mensagem de erro
     */
    ul.innerHTML = "";
    /**
     * Percorrendo o array com ForEach
     */
    erros.forEach(function (erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obterPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }

    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("Peso inválido!");
    }
    if(!validaAltura(paciente.altura) || paciente.peso.length == 0){
        erros.push("Altura inválida!");
    }
    if(paciente.nome.length == 0){
        erros.push("Nome Inválido!");
    }
    if(paciente.gordura < 0 || paciente.gordura.length == 0){
        erros.push("Porcentagem de gordura inválida!");
    }
    return erros;
}


/**
 * Campos a serem validades
 * Nome OK 
 * Peso OK
 * Altura OK
 * Gordura OK
 */