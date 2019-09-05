
// Events and Functions
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    // Prevent comportament default
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //extrair informacoes do paciente do form
   var paciente = obtemPacienteFormulario(form);


    
    var erros = validaPaciente(paciente);


    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    // Create Row and insert values from form
    var pacientTr = montaTr(paciente);



    var table = document.querySelector("#tabela-pacientes")

    table.appendChild(pacientTr);

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
});
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    console.log(erros);
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    var pacientTr = document.createElement("tr");
    pacientTr.classList.add("paciente");

    pacientTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacientTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacientTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacientTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacientTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacientTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];
        
    console.log(paciente);

    if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura é invalida");

    if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco");

    if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");

    if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");

    return erros;

}