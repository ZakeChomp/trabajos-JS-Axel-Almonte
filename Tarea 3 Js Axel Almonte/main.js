//Celsius a farenheit | (0°C × 9/5) + 32 = 32°F


function celToFar(ent){
    return ent*(9/5)+32;
}
console.log(celToFar(3));


//Celsius a kelvin | 0°C + 273.15 = 273.15K


function celToKel(ent){
    return ent+273.15
}
console.log(celToKel(1))


//Farenheit a celsius | (0°F − 32) × 5/9 = -17.78°C


function farToCel(ent){
    return (ent-32)*(5/9)
}
console.log(farToCel(7))


//Farenheit a kelvin | (0°F − 32) × 5/9 + 273.15 = 255.372K


function farToKel(ent){
    return (ent-32)*(5/9)+273.15
}
console.log(farToKel(5))


//Kelvin a celsius | 0K − 273.15 = -273.1°C


function kelToCelsius(ent){
    return ent-273.15
}
console.log(kelToCelsius(8))


//Kelvin a farenheit | (0K − 273.15) × 9/5 + 32 = -459.7°F


function kelToFar(ent){
    return (ent-273.15)*(9/5)+32
}
console.log(kelToFar(6))

