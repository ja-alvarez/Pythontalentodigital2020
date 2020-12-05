//DESAFIOS

//Imprime los números enteros entre 1 y x. Si x es menor que 1, retorna false.
function imprimeHasta(x) {
    for (var i = 1; i <= x; i++) {
        console.log(i); //1,2,3,4,5,6,7,8,9...1000000
    }
    if (x < 1) {
        return false;
    }
}
imprimeHasta(1000000);
y = imprimeHasta(-10);
console.log(y); //false


//Imprime todos los enteros desde el 0 hasta el 255. Al imprimir cada entero, debes imprimir 
//la suma que se lleva. Retorna la suma final.
function printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum
}
y = printSum(255) // = 0, 0, 1, 1, 2, 3, 3, 6... 255, 32640.
console.log(y) // 32640


//Debes imprimir la suma de todos los valores en el arreglo dado:
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); //6

//Escribe una función que retorne el mayor elemento del arreglo dado:
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (i = 0; i < x.length; i++) {
        if (x[i] > mayorHastaAhora) {
            mayorHastaAhora = x[i];
        }
    }
    return mayorHastaAhora;
}
console.log(mayorElem([8, 3, 11, 2, -8])); // debe imprimir 11