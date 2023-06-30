function trp(){
    num1 = parseFloat(prompt('Escriba el lado del triángulo'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar el número por favor')
        trp();
    }else{
        alert('El resultado del perímetro es: ' + (num1 * 3));
    }
}

function tra(){
    num1 = parseFloat(prompt('Escriba la base del triángulo'));
    num2 = parseFloat(prompt('Escriba la altura del triángulo'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar la base por favor')
        trp();
    }else if(isNaN(num2)){
        alert('Vuelva a ingresar la altura por favor')
        res();
    }else{
        alert('El resultado del área es: ' + ((num1 * num2)/2));
    }
}

function tri(){   
    op = confirm("Presione ok para operar con el perímetro de la figura, cancel para el área del mismo");

    if(op == true){
        trp();
    }else{
        tra();
    }
}





function cuap(){
    num1 = parseFloat(prompt('Escriba el lado del cuadrado'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar el número por favor')
        trp();
    }else{
        alert('El resultado del perímetro es: ' + (num1 * 4));
    }
}

function cuaa(){
    num1 = parseFloat(prompt('Escriba la base del cuadrado'));
    num2 = parseFloat(prompt('Escriba la altura del cuadrado'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar la base por favor')
        trp();
    }else if(isNaN(num2)){
        alert('Vuelva a ingresar la altura por favor')
        res();
    }else{
        alert('El resultado del área es: ' + (num1 * num2));
    }
}

function cua(){   
    op = confirm("Presione ok para operar con el perímetro de la figura, cancel para el área del mismo");

    if(op == true){
        cuap();
    }else{
        cuaa();
    }
}




function reca(){
    num1 = parseFloat(prompt('Escriba la base del rectángulo'));
    num2 = parseFloat(prompt('Escriba la altura del rectángulo'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar la base por favor')
        trp();
    }else if(isNaN(num2)){
        alert('Vuelva a ingresar la altura por favor')
        res();
    }else{
        alert('El resultado del área es: ' + (num1 * num2));
    }
}

function rec(){   
    op = confirm("Presione ok para operar con el perímetro de la figura, cancel para el área del mismo");

    if(op == true){
        cuap();
    }else{
        reca();
    }
}





function cirp(){
    num1 = parseFloat(prompt('Escriba el diametro del círculo'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar el número por favor')
        trp();
    }else{
        alert('El resultado del perímetro es: ' + (3.1415 * num1));
    }
}

function cira(){
    num1 = parseFloat(prompt('Escriba el radio del círculo'));
    if(isNaN(num1)){
        alert('Vuelva a ingresar el número por favor')
        trp();
    }else{
        alert('El resultado del perímetro es: ' + (3.1415 * (num1**2)));
    }
}

function cir(){   
    op = confirm("Presione ok para operar con el perímetro de la figura, cancel para el área del mismo");

    if(op == true){
        cirp();
    }else{
        cira();
    }
}