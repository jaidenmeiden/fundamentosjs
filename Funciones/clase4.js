var nombre = 'Jaiden', edad = 38

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Diana', 28)
imprimirEdad('David', 30)
imprimirEdad('Milena', 35)

//JavaScript es un lenguaje interpretado
//Lenguaje debilmente tipado y siempre va a intentar ejecutar el código
//Ejemplos
imprimirEdad(35, 'Fulano')
imprimirEdad('Fulano')
imprimirEdad()