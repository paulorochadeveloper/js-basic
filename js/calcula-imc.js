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
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    
    if(!pesoEhValido){
        //console.log("Peso inválido")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        //console.log("Altura inválido")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida ){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    
        //console.log(imc);
        
    }
}
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;

    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}
function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}