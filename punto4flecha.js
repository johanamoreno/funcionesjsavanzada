let sable=[-5,-10,0,-1.1,3,5]
let energiaNegativa=0

let calcularEnergia = (sable,energiaNegativa) => {

    for (let i=0; i<sable.length; i++) {

        if (sable[i] < 0) {
            energiaNegativa ++

         }else{
        console.log()
        }
    }
    return(energiaNegativa)
    }

console.log(`La cantidad de sables de luz con energia negativa en joules es: ${calcularEnergia(sable,energiaNegativa)} Sables`)