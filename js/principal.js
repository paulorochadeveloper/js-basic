
var titulo = document.querySelector(".titulo");

titulo.textContent = "Mudança de Título";


//list lines for tables (querySelectorAll)
var pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes.length);

//Loooping array pacientes (calc imc Line by line)
for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]); 

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    
    if((peso <= 0) || (peso >= 1000) ){
        //console.log("Peso inválido")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if((altura <= 0) || (altura >= 3) ){
        //console.log("Altura inválido")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida ){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    
        //console.log(imc);
        
    }
}

// Events and Functions
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    // Prevent comportament default
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    
    // Create Row and insert values from form
    var pacientTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacientTr.appendChild(nomeTd);
    pacientTr.appendChild(pesoTd);
    pacientTr.appendChild(alturaTd);
    pacientTr.appendChild(gorduraTd);


    var table = document.querySelector("#tabela-pacientes")

    table.appendChild(pacientTr);

    
});