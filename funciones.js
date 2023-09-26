let funcion=function(parametro){

    return parametro+" :)";

}

console.log(funcion("Hola Mundo"));

/*CALLBACK*/

function getIdentificacion(numero,letra,callback){
    let identificacion = callback(numero,letra);
    return identificacion
}

let formatoNIF= function(numero,letra){
    return numero+"-"+letra;
}

let formartoNIE=function(numero,letra){
    return letra+"-"+numero;
}

console.log(getIdentificacion("389389389","S",formatoNIF))

function getIdentificacion2(numero,letra,callback){
    let identificacion= callback(numero,letra);
    return identificacion;
};

(function(numero,letra){
console.log(numero+"-"+letra)
})("348573","T");