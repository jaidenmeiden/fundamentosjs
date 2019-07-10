//División entera emntre 2 números
/*
    13 / 4

    Condición: Dividendo >= Divisor
    
    1 ciclo         => 13 - 4 = 9
    2 ciclo         => 9- 4 = 5
    3 ciclo         => 5 - 4 = 1
    Termina ciclo   => 1- 4 = -3   (Incumple condición y termina algoritmo)
 */

function divisionEntera1(dividendo, divisor) {
    if(dividendo < divisor) {
        console.log(`Termino, residuo: ${dividendo}`);
    } else {
        dividendo = dividendo - divisor;
        console.log(`Calculo: ${dividendo}`);
        divisionEntera1(dividendo, divisor);
    }
}

function divisionEntera2(dividendo, divisor) {
    if(dividendo < divisor) {
        return 0;
    }

    return 1 + divisionEntera2(dividendo - divisor, divisor)
}

divisionEntera1(13, 4);
console.log("Veces: " + divisionEntera2(13, 4));

divisionEntera1(30, 3);
console.log("Veces: " + divisionEntera2(30, 3));