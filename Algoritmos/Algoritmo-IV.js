/*Algoritmo IV
1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores 
que Y. */
/*a*/
function mayoresY(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > y) {
            console.log(arreglo[i]);
        }
    }
}
var y = 5
arreglo = mayoresY([0, 5, -3, 2, 6, -1, 9]);

/*b*/
var arr = [0, 5, -3, 2, 6, -1, 9];
var y = 5
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
        console.log(arr[i]);
    }
}
//R: 6,9

/*2. Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.*/

function MaxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        avg = avg + arr[i] / arr.length;
    }
    return [max, min, avg];
}
arr = MaxMinAvg([0, 5, -3, 2, 6, -1, 9]);
console.log(arr);

/*3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores 
negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) 
debiera devolver [1,2, “Dojo”, “Dojo”, 5].*/

function reemplazarNegativos(arr) {
    for (i = 0; i < arr.length; i++) {
        x = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = "Dojo";
            }
            x.push(arr[i])
        }
        return x;
    }
}
arr = reemplazarNegativos([1, 2, -3, -5, 5]);
console.log(arr);

/*4. Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el 
array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/
/*a*/
function removerRango(arreglo, inicio, final) {
    var arr = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (i < inicio) {
            arr.push(arreglo[i]);
        }
        if (i > final) {
            arr.push(arreglo[i]);
        }
    }
    return arr;
}
b = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(b)

/*b*/
function removerRango(arreglo, inicio, final) {
    var arr = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (i < inicio || i > final) {
            arr.push(arreglo[i]);
        }
    }
    return arr;
}
b = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(b)