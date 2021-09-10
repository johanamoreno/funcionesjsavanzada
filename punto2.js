function consultarNombre(codigoNave){

    return (codigoNave.split(":"));
}

console.log(`El nombre del conductor de la nave ARQ2555 es: ${consultarNombre("ARQ2555:Sara Bel-Sun")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2556 es: ${consultarNombre("ARQ2556:Nodin Chavdri")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2557 es: ${consultarNombre("ARQ2557:Fin")[1]}`);