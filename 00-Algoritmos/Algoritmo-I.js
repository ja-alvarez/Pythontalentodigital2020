//Ejercicio 1
for (var i = 0; i < 5; i++) { //i=0, 1, 2, 3, 4, 5
    console.log(i);
}
//R: 0, 1, 2, 3, 4

//Ejercicio 2
for (var i = 0; i < 5; i++) { //i=0, 1, 2, 3, 4, 5
    i = i + 1;
    console.log(i);
}
//R: 1, 3,  5

//Ejercicio 3
for (var i = 0; i < 5; i++) { // i=0, 3, 4, 7, 8
    i = i + 3;
    console.log(i);
}
//R: 3, 7

//Ejercicio 4
function y(num1, num2) { //y=
    return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
    //r: 5, 8

//Ejercicio 5
function y(num1, num2) { // y =(2,3)-> (3,5)
    console.log(num1); // 2, 3
    return num1 + num2; //5, 8
}
console.log(y(2, 3))
console.log(y(3, 5))
    //R: 2, 5, 3, 8

//Ejercicio 6
a = 15;
console.log(a); //15
function y(a) {
    console.log(a); //10
    return a;
}
b = y(10);
console.log(b); //10
//R: 15, 10, 10

//Ejercicio 7
a = 15;
console.log(a); //15

function y(a) {
    console.log(a); //10
    return a * 2; //20
}
b = y(10);
console.log(b);
//R: 15, 10, 20