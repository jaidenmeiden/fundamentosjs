/*
    Factorial de 6
    !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720

    Aquí calculos equivalentes:
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
 */

function factorial(n) {//Función recursiva normal
    if(!this.cache) {
        this.cache = {};
    }

    if(n === 1) {
        return n;
    }

    return n * factorial(n-1);
}

//Almacena en la cacha calculos previos para ser utilizados cuando se requiera
function factorialCache(n) {
    if(!this.cache) {//Validamos si cache existe
        this.cache = {};//La inicializamos si no
    }

    debugger
    if(this.cache[n]) {//Validamos si el calculo para el factorial, ya fue hecho previamente
        return this.cache[n];//Si sí, lo utilzamos
    }

    if(n === 1) {
        return n;
    }

    this.cache[n] = n * factorialCache(n-1);
    debugger
    return this.cache[n];
}


//console.log(factorial(6));
console.log(factorialCache(6));
console.log(factorialCache(12));