function a() {
    return 35;
}
console.log(a())
    //R:35

function a() {
    return 4;
}
console.log(a() + a());
//R:8

function a(b) {
    return b;
}
console.log(a(2) + a(4));
//R:6

function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));
//R: 3, 9

function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));
//R: 40

function a(b) { //15
    if (b < 10) {
        return 2;
    } else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//R: 4

function a(b, c) { //b= 3; c=10
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
//R: 10,3, 30

function a(b) { //b=3
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//R: 3,4

function a() {
    for (var i = 0; i < 10; i++) { //i=0,2,3,5,6,8,9,11
        i = i + 2;
        console.log(i); //2,5,8,11
    }
}
a();
//R:2,5,8,11

function a(b, c) { //0,10
    for (var i = b; i < c; i++) { //i=0,1,2,3,4,5,6,7,8,9,10
        console.log(i); //0,1,2,3,4,5,6,7,8,9
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));
//R:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

function a() {
    for (var i = 0; i < 10; i++) { //i=0,
        for (var j = 0; j < 10; j++) { //
            console.log(j); //
        }
        console.log(i); //
    }
}
//R:undefined?

function a() {
    for (var i = 0; i < 10; i++) { //
        for (var j = 0; j < 10; j++) { //j=
            console.log(i, j);
        }
        console.log(j, i);
    }
}
//R:undefined


var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
console.log(z);
//R: 10


var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//R: 15, 10


var z = 10;

function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//R: 15, 15