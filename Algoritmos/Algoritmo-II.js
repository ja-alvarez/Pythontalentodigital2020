//Muestra de código 1 - function y return I
function a() {
    console.log('hello');
}
console.log('Dojo');
//R: Dojo


//Muestra de código 2 - function y return I
function a() { //15
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);
//R: hello, x is 15.


//Muestra de código 3 - function y return I
function a(n) { //18
    console.log('n is', n);
    return n + 15;
}
x = a(3);
console.log('x is', x);
//R: n is 3, x is 18


//Muestra de código 4 - function y return I
function a(n) {
    console.log('n is', n);
    y = n * 2; //3*2=6,  5*2=10
    return y;
}
x = a(3) + a(5); //6+10
console.log('x is', x);
//R: n is 3, n is 5, x is 16


//Muestra de código 5 - orden de las operaciones I
function op(a, b) {
    c = a + b; //5, 8
    console.log('c is', c);
    return c;
}
x = op(2, 3) + op(3, 5);
console.log('x is', x);
//R: c is 5, c is 8, x is 13


//Muestra de código 6 - orden de las operaciones I
function op(a, b) {
    c = a + b; //5,6,8
    console.log('c is', c);
    return c;
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
console.log('x is', x)
    //R: c is 5, c is 3, c is 6, c is 3, c is 5, c is 8, x is 19


//Muestra de código 7 - scoping
var x = 15;

function a() {
    var x = 10;
}
console.log(x);
a();
console.log(x);
//R: 15, 15


//Actividad
//1
function multiply(x, y) {
    console.log(x);
    console.log(y);
}
b = multiply(2, 3);
console.log(b);
//R: 2,3


//2
function multiply(x, y) {
    return x * y;
}
b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));
//R: 6,10


//3
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) { //i=0>3>4>7>8
    i = i + 3;
    console.log(i);
}
//R: 3,7

//4
var x = 15;
console.log(x);

function awesome() {
    var x = 10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//R: 15,15,10,15

//5
for (var i = 0; i < 15; i += 2) { //i=0>2>4>6>8>10>12>14>16
    console.log(i);
}
//R: 0,2,4,6,8,10,12,14

//6
for (var i = 0; i < 3; i++) { //i=0>1>2>3
    for (var j = 0; j < 2; j++) { //j=0>1>2 -> 0>1>2 -> 0>1>2 ->
        console.log(i * j);
    }
}
//R: 0,0,0,1,0,2

//7
function looping(x, y) { //x=3, y=3
    for (var i = 0; i < x; i++) { //i=0>1>2>3
        for (var j = 0; j < x; j++) { //j=0>1>2>3 -> 0>1>2>3 -> 0>1>2>3
            console.log(i * j);
        }
    }
}
z = looping(3, 3);
console.log(z);
//R: 0,0,0,0,1,2,0,2,4,undefined

//8
function looping(x, y) { //x=3, y=5
    for (var i = 0; i < x; i++) { //i=0>1>2
        for (var j = 0; j < y; j++) { //j=0>1>2>3>4>5 -> 0>1>2>3>4>5 -> 0>1>2>3>4>5
            console.log(i * j);
        }
    }
    return x * y; //15
}
z = looping(3, 5);
console.log(z);
//R: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

//Parte2- 
//Print 1 to x
//función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, 
//haz que se muestre (print/log) “número negativo” y que la función devuelva falso.
function printUpTo(x) {
    if (x < 0) {
        console.log("número negativo")
        return false;
    }
    for (let i = 1; i <= x; i++) {
        console.log(i);
    }
}
printUpTo(1000000);
y = printUpTo(-10);
console.log(y);

//PrintSum
//Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x 
//y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.

function printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        console.log(i); //i=0>1>2>3...255>256
        sum = sum + i;
        console.log(sum) //i=0>1>3>6...32385>32640
    }
    return sum
}
y = printSum(255)
console.log(y);


//PrintSumArray
//Completa el código a continuación para que la función entregue la suma de todos los valores 
//en un array dado.

function printSumArray(x) { //[1,2,3]
    var sum = 0; //0>1>3>6
    for (var i = 0; i < x.length; i++) { //i=0>1>2>3
        sum = sum + x[i]; //1>3>6
    }
    return sum
}
console.log(printSumArray([1, 2, 3]))

//Bonus: LargestElement
//Crea una función que entregue el elemento más grande (largest element) en un array. 
//Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.

function largestElement(x) {
    var y = x[0];
    for (var i = 0; x.length; i++) {
        if (x[i] > y) {
            y = x[i];
        }
    }
    return y;
}
console.log(largestElement([1, 30, 5, 7]))