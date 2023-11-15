//Ejercicio 1 Calculdora



let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;
//Funcion sumar
function sumar(valor)
{
    suma += valor;
}

//Funcion restar
function restar(valor)
{
    resta -= valor;
}


function mostrarResultado(){
    alert("Resultado: " + suma);
}

function operacion(valor){
    let operacion = "";
if (operacion = "resta"){
    resta -= valor;
} else if (operacion = "suma"){
    suma += valor;  
}
}
