//funcion calcular pesos
function pesos(dolar){
    return dolar*120;
}

//funcion mensaje agradecimiento
function agradecer(){
    alert("Gracias por usar el conversor");
}

//funcion mensaje no ingresa monto
function noIngresa(){
    alert("No ingresaste monto");
}

let dolar=prompt("Ingrese la cantidad de $ en dolares, si desea salir escriba 'ESC'");
if(dolar=="ESC"){
    noIngresa();
}else{
    while(dolar!="ESC"){
        alert("Necesita $" + pesos(dolar));

        //condicion de salida
        dolar=prompt("Ingrese la cantidad de $ en dolares, si desea salir escriba 'ESC'");
    }
    agradecer();
}
