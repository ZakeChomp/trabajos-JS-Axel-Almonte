// Realizar un archivo JavaScript con los siguientes algoritmos:

console.log("1.Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante (d = v x t).");
console.log("2.Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un lugar (t = d / v).");
console.log("3.Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo (v = d / t).");


let d = 78
let v = 12
let t = 30

//1. d = v x t
console.log(v*t);

//2. t = d / v
console.log(d/v);

//3. v = d / t
console.log(d/t);


console.log("4.Algoritmo que me permita escribir un número y muestre la tabla de multiplicar de ese número (1 - 12).");


//ent = entrada

var ent = 23
var con = 1

while (con <= 12) {
    console.log(`${con} x ${ent} = ${con*ent}`);
    con++
}


console.log("5.Algoritmo que me permita escribir un número decimal y me retorne el número convertido en binario. (int = 50; out = 110010)");

//ent = entrada

var ent = 94;
res = null;
bin = [];

while(ent == 1){
    res = ent%2;
    bin.push(res);
    ent = ent/2;
}

bin.reverse();
bin = bin.tostring();


console.log("6.Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado (int = 5; out = 1, 2, 3, 4, 5).");


//ent = entrada

var ent = 5
var con = 1

while (con <= ent){
    console.log(`${con}`);
    con++
}


console.log("7.Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 (int = 5; out = 5, 4, 3, 2, 1).");


//ent = entrada

var ent = 7

while (ent > 0){
    console.log(`${ent}`);
    ent--
}


console.log("8.Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado separando pares e impares. (int = 5; outOdd = 1, 3, 5; outEven = 2, 4)");


//ent = entrada

var ent = 7
var con = 1
Odd = []
Even = []

while (ent > 0) {
    if(con%2 == 0) {
        Even.push(con)
    }else {
        Odd.push(con)
    }
    con++
    ent--
}

console.log(Odd);
console.log(Even);


console.log("9.Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 separando pares e impares. (int = 5; outOdd = 5, 3, 1; outEven = 4, 2)")


//ent = entrada

var ent = 7
Odd = []
Even = []

while (ent > 0) {
    if(ent%2 == 0) {
        Even.push(ent);
    }else {
        Odd.push(ent);
    }
    ent--
}

console.log(Odd);
console.log(Even);


//10.Algoritmo que me permita escribir un número y me retorne una lista de los números primos desde cero hasta el número indicado.


// 11.Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci. (int = 5; out = 0, 1, 1, 2, 3)





//12.Algoritmo para codificar mensajes utilizando Cifrado de César.





// 13.Algoritmo para decodificar mensajes utilizando Cifrado de César.




