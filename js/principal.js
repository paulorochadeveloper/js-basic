
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Mudança de Título";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;


if((peso <= 0) || (peso >= 1000) ){
    console.log("Peso inválido")
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if((altura <= 0) || (altura >= 3) ){
    console.log("Altura inválido")
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
}

if (pesoEhValido && alturaEhValida ){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;

    console.log(imc);
    
}
