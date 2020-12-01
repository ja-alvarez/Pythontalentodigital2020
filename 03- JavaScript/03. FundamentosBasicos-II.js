//Me falta completar dos ejercicios (10 y 13)

/*1. Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/
function tamañoGrande(x) {
    var arr = []; {
        for (i = 0; i < x.length; i++) {
            if (x[i] >= 0) {
                x[i] = "big";
            }
            arr.push(x[i]);
        }
    }
    return arr;
}
x = tamañoGrande([-1, 3, 5, -5]);
console.log(x);

/*2. Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.*/
function MaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    return [max];
}
arr = MaxMin([0, 5, -3, 2, 6, -1, 9]);

/*3. Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/
function abc2(array) {
    console.log(array[array.length - 2]);
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            return array[i];
        }
    }
}
array = abc2([-1, 3, 5, -5]);

/*4. Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.*/
function vision(arr) {
    newarr = [];
    for (i = 0; i < arr.length; i++) {
        newarr.push(arr[i] * 2)
    }
    return newarr;
}
arr = vision([1, 2, 3]);
console.log(arr);

/*5. Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor 
con el número de valores positivos encontrados en el array. 
Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/
function contarPositivos(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count = count + 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
console.log(contarPositivos([-1, 1, 1, 1]));

/*6. Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares 
seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, 
imprime (print) “¡Es para bien!”.*/
function paresImpares(arr) {
    var impar = 0;
    var par = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            impar = impar + 1;
            par = 0;
            if (impar == 3) {
                console.log("¡Qué imparcial!");
            }
        } else {
            par = par + 1;
            impar = 0;
            if (par == 3) {
                console.log("¡Es para bien!");
            }
        }
    }
}
arr = paresImpares([5, 7, 3, 4, 0, 0, 1]);

/*7. Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
Luego, console.log cada valor del array y devuelve arr.*/
function incrementaSegundos(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
        }
        if (i % 2 != 0) {
            newArr.push(arr[i] + 1);
        }
    }
    console.log(newArr);
    return newArr;
}
arr = incrementaSegundos([0, 1, 2, 3, 4]);

/*8. Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) 
del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver 
[“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/
function longitudesPrevias(x) {
    for (var i = x.length - 2; i >= 0; i--) {
        var j = x[i].length;
        x[i + 1] = j;
    }
    return x;
}
x = longitudesPrevias(["programar", "dojo", "genial"]);
console.log(x);

/*function longitudesPrevias(x) {
    var newArr = [];
    if ([0]) {
        newArr.push(x[0]);
    }
    for (var i = x.length - 1; i >= 0; i--) {
        if ([i] > 0) {
            x[i] = x[i - 1].length;
            newArr.push(x[i]);
        }
    }
    return newArr;
}
x = longitudesPrevias(["programar", "dojo", "genial"]);
console.log(x);*/

/*9. Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los 
valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, 
agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.*/
function agregaSiete(x) {
    var newArr = [];
    for (var i = 0; i < x.length; i++) {
        newArr.push(x[i] + 7)
    }
    return newArr;
}
x = agregaSiete([1, 2, 3]);
console.log(x);

/*10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, 
    es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar 
        (swap) valores).*/


/*11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores 
del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], 
devuelve [-1,-3,-5].*/
function perspectivaNegativa(x) {
    var newArr = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = x[i] - (x[i] * 2);
            newArr.push(x[i]);
        } else {
            newArr.push(x[i]);
        }
    }
    return newArr;
}
x = perspectivaNegativa([1, -3, 5]);

/*12. Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que 
alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/
function siempreHambriento(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            sum = sum + 1;
            console.log("yummy");
        }
    }
    if (sum == 0) {
        console.log("tengo hambre");
    }
}
arr = siempreHambriento([1, "comida", 2, "comida"]);
arr = siempreHambriento([2, 2]);


/*13. Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el 
ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array 
a [“pizza¨, 42, “Ada”, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. 
No es necesario devolver (return) el array esta vez.*/

/*14. Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array 
arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería 
devolver [3,6,9].*/
function escalaArray(array, num) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] * num;
    }
    return array;
}

console.log(escalaArray([1, 2, 3], 3));