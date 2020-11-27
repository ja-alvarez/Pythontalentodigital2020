/*1. Configura un array para que los valores negativos se transformen en 0.
Por ejemplo, resetNegativos([1, 2, -1, -3]) debiera dar como resultado[1, 2, 0, 0].*/

function resetNegativos(b) {
    for (var i = 0; i < b.length; i++) {
        if (b[i] < 0) {
            b[i] = 0;
        }    
    }    
    return b;
}
console.log(resetNegativos([1, 2, -1, -3]))

/*2. Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor.Por ejemplo, moverAdelante([1, 2, 3]) debiera dar como resultado[2, 3, 0].*/

function arr(x) {
    b = [];
    b.push(x[1]);
    b.push(x[2]);
    b.push(0);
    return b;
}
x = arr([1, 2, 3]);
console.log(x)

/*3. Configura un array para que el resultado sean los valores en el orden contrario.
Por ejemplo, returnReverso([1, 2, 3]) debe dar[3, 2, 1].*/

function returnReverso(x) {
    b = [];
    b.push(x[2]);
    b.push(x[1]);
    b.push(x[0]);
    return b;
}
x = returnReverso([1, 2, 3]);
/*console.log(x)*/

/*4. Crea una función que cambie un array repitiendo sus valores originales(manteniendo el mismo orden).
Por ejemplo, repetirValores([4, ”Ulysses”, 42, false]) debiera dar[4, 4, “Ulysses”, “Ulysses”, 42, 42, 
false, false].*/

function repetirValores(x) {

    b = [];
    for (i = 0; i < x.length; i++) {
        b.push(x[i]);
        b.push(x[i]);
    }
    return b;
}
x = repetirValores([4, "Ulysses", 42, "false"]);
console.log(x);