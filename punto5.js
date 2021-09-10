function calcularSalario(basico,licven,comision,deduccion) {
  
    comision=1500000*licven;
    nomina=basico+comision
    deduccion=nomina*0.05;
    nominatotal=nomina-deduccion;

    return(`El salario neto del empleado es $: ${nominatotal}`);
}

console.log(calcularSalario(3500000,2,1500000,0.05));



