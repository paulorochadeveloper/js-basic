
// Events and Functions
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    // Prevent comportament default
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //extrair informacoes do paciente do form
   var paciente = obtemPacienteFormulario(form);

    console.log(paciente);
    
    // Create Row and insert values from form
    var pacientTr = montaTr(paciente);

    var table = document.querySelector("#tabela-pacientes")

    table.appendChild(pacientTr);

    form.reset();
});

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