function a(x, y) {
    return 5;
}
console.log(a(5, 5))
    //R: 5


function a(x, y) { //x=2,y=2 ->  x=6,y=8
    z = [] //[2,2,5] -> [6,8,5]
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z); // [2,2,5] -> [6,8,5]
    return z;
}
b = a(2, 2)
console.log(b); //[2,2,5], 
console.log(a(6, 8)); //[6,8,5]
//R: [2,2,5], [2,2,5], [6,8,5], [6,8,5]


function a(x) { //a=2
    z = []; //[2]>[]>[2]>[2,2]
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
y = a(2); //[2,2] > [2,2,5]
y.push(5);
console.log(y);
//R: [2,2,5]

function a(x) { //x=[2,3,4,5]
    if (x[0] < x[1]) { //2<3
        return true;
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5])
console.log(b);
//R: true

function a(x) { //x=[1,2,3,4]
    for (var i = 0; i < x.length; i++) { //i=0>1>2>3>4
        if (x[i] > 0) {
            x[i] = "Coding";
        }    
    }    
    return x;
}
console.log(a([1, 2, 3, 4]))
    //R: [Coding,Coding,Coding,Coding]




function a(x) { //[5, 7, -1, 4] -> [5,"Coding","Dojo",4]
    for (var i = 0; i < x.length; i++) { //i=0,1,2,3
        if (x[i] > 5) {
            x[i] = "Coding";
        } else if (x[i] < 0) {
            x[i] = "Dojo";
        }    
    }    
    return x;
}
console.log(a([5, 7, -1, 4]))

//R: [5,"Coding","Dojo",4]


function a(x) { //a=[5,10]
    if (x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
b = a([5, 10])
console.log(b);
//R: 10

function sum(x) { //[]
    sum = 0;
    for (var i = 0; i < x.length; i++) { //i=0
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//R: No hace nada

//Parte 2
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores.
function printAverage(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length;
}
y = printAverage([1, 2, 3]);
console.log(y);
y = printAverage([2, 5, 8]);
console.log(y);

//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)
function returnOddArray() {
    odd = [];
    for (var i = 1; i <= 255; i += 2) {
        odd.push(i);
    }
    return odd;
}
y = returnOddArray();
console.log(y);

//3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..
function squareValue(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i]
    }
    return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]