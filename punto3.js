let temperatura1;
let temperatura2;
let temperatura3;
let temperatura4;


function calcularTemperaturaMaxima(temperatura1,temperatura2,temperatura3,temperatura4){

    return(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))
}

function calcularTemperaturaMinima(temperatura1,temperatura2,temperatura3,temperatura4){

    return(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))
}


let TemperaturaMaxima=calcularTemperaturaMaxima(-5,-200,-30,10);
let TemperaturaMinima=calcularTemperaturaMinima(-5,-200,-30,10);

console.log(`El promedio de temperatura es: ${(TemperaturaMaxima+TemperaturaMinima)/2}°C`);