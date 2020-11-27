/*Trabaja en los siguientes desafíos y sube tu trabajo en un solo archivo.
1. Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/
function Arr() {
    num = [];
    for (var i = 1; i <= 255; i++) {
        num.push(i);
    }
    return num;
}
y = Arr();
console.log(y);

/*2. Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.*/

//a.
function printSum(x) {
    var sum = 0;
    for (var i = 2; i <= x; i = i + 2) {
        sum = sum + i;
    }
    return sum
}
y = printSum(1000)
console.log(y)

//b.
function printSum1(x) {
    var sum = 0;
    for (var i = 1; i <= x; i++) {
        if (i % 2 != 1) {
            sum = sum + i;
        }
    }
    return sum;
}
y = printSum1(1000)
console.log(y);

//c.
function printSum1() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 != 1) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(printSum1());

/*3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/
function printSum(x) {
    var sum = 0;
    for (var i = 1; i < x; i = i + 2) {
        sum = sum + i;
    }
    return sum
}
y = printSum(5000);
console.log(y);


/*4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).*/
function Arr(y) {
    sum = 0;
    for (var i = 0; i < y.length; i++) {
        sum = sum + y[i];
    }
    return sum;
}
y = Arr([1, 2, 5]);
console.log(y);
y = Arr([-5, 2, 5, 12]);
console.log(y);

/*5. Encuentra el mayor(max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor(ej: para[-3, 3, 5, 7] el número mayor(max) es 7).*/
function findMax(arr) {
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
Arr = findMax([-3, 3, 5, 7]);
console.log(Arr);

/*6. Encuentra el promedio(avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores(ej: para[1, 3, 5, 7, 20] el promedio es 7.2).*/
function findAvg(arr) {
    var avg = 0;
    for (i = 0; i < arr.length; i++) {
        avg = avg + arr[i];
    }
    return avg / arr.length;
}
arr = findAvg([1, 3, 5, 7, 20]);
console.log(arr);

/*7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50(ej: [1, 3, 5, …, 47, 49]).Pista: Usa el método‘ push’.*/
function impares(y) {
    var odd = [];
    for (i = 1; i <= y; i++) {
        if (i % 2 == 1) {
            odd.push(i)
        }
    }
    return odd;
}
y = impares(50);
console.log(y);

/*8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.Por ejemplo, si arr = [1, 3, 5, 7] y Y = 3, tu función devolverá 2(hay 2 números en el array 
mayores que 3, esto son 5 y 7).*/
function mayorY(y) {
    var z = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            z.push(arr[i])
        }
    }
    return z;
}
arr = [1, 3, 5, 7];
y = mayorY(3);
console.log(y);

/*9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor(ej: [1, 5, 10, -2] será[1, 25, 100, 4]).*/
function square(arr) {
    x = [];
    for (i = 0; i < arr.length; i++) {
        x.push(arr[i] * arr[i])
    }
    return x;
}
arr = square([1, 5, 10, -2]);
console.log(arr);

/*10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números 
negativos(ej: [1, 5, 10, -2] se convertirá en[1, 5, 10, 0]).*/
function negativos(arr) {
    x = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
        x.push(arr[i])
    }
    return x;
}
arr = negativos([1, 5, 10, -2]);
console.log(arr);

/*11. Max / Min / Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor(max), menor(min) y promedio(avg) del array original(ej: 
[1, 5, 10, -2] devolverá[10, -2, 3.5]).*/
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
Arr = MaxMinAvg([1, 5, 10, -2]);
console.log(Arr);

/*12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array.La extensión mínima predeterminada del array es 2(ej: [1, 5, 10, -2] será[-2, 5, 10, 1]).*/
function intercambiaValores(x) {
    var arr = []; {
        for (i = x.length - 1; i >= 0; i--)
            arr.push(x[i]);
    }
    return arr;
}
x = intercambiaValores([1, 5, 10, -2]);
console.log(x);

/*13. De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string‘ Dojo’.Por ejemplo, dado el array = [-1, -3, 2], tu función devolverá
[‘Dojo’, ‘Dojo’, 2].*/
function numtoString(x) {
    var arr = []; {
        for (i = 0; i < x.length; i++) {
            if (x[i] < 0) {
                x[i] = "Dojo";
            }
            arr.push(x[i]);
        }
    }
    return arr;
}
x = numtoString([-1, -3, 2]);
console.log(x);