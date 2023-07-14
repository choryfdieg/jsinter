function actividadArreglo(){

    let myString = 'Javascript+es+super+cool';

    // 1. convertir la cadena en un arreglo
    let myArray = myString.split("+");

    let arrayLength = myArray.length;

    let ultimaPosicion = arrayLength - 1;

    let lastItem = myArray[ultimaPosicion];

    console.log(myArray);

    console.log("Ultimo elemento", lastItem);


}


function longitudArreglo(){

                 // 0, 1,  2,  3
    let arreglo = [ 3, 66, 74, "juan" ];

    let longitud = arreglo.length;

    alert("La longitud del arreglo es " + longitud);


    let palabra = arreglo[3];

    alert("En el indice 3 está: " + palabra);

    let resultado = arreglo[0] + arreglo[1] - arreglo[2];

    alert("el resultado de la operacion es: " + resultado);

}


function longitudCadena(nombre){

    let longitud = nombre.length;

    if(longitud > 5){


        alert("Es mayor a 5, la longitud de " + nombre + " es: " + longitud);
    
    
    }else{
        alert("La longitud de " + nombre + " no es mayor a 5")
    }

}


function mayorQue(numeroA, numeroB){

    if(   (numeroA > numeroB) && (numeroA != numeroB)  ){
        alert("El " + numeroA + " es mayor");
    }else{
        alert("El " + numeroB + " es mayor");
    }  
    
}

function menorQue(numeroA, numeroB){

       
    if(numeroA < numeroB ){
        alert("el numero " + numeroA + " es menor");
    }else{

        if(numeroB < numeroA){
            alert("el numero " + numeroB + " es menor"); 
        }else{
            alert("Los numeros son iguales")
        }

          
    }

}