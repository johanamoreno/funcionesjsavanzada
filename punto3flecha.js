let calcularTemperaturaMaxima=(temperatura1,temperatura2,temperatura3,temperatura4)=>(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))

let calcularTemperaturaMinima=(temperatura1,temperatura2,temperatura3,temperatura4)=>(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))

let TemperaturaMaxima=calcularTemperaturaMaxima(-5,-200,-30,10);
let TemperaturaMinima=calcularTemperaturaMinima(-5,-200,-30,10);

console.log(`El promedio de temperatura es: ${(TemperaturaMaxima+TemperaturaMinima)/2}°C`);