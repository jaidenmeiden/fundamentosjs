var persona1 = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    edad: 38
};

var persona2 = {
    nombre: 'Diana',
    apellido: 'Muriel',
    edad: 28
};

//Escritura 1
function imprimirNombreMayusculas1(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

console.log("Escritura 1");
imprimirNombreMayusculas1(persona1.nombre);
imprimirNombreMayusculas1(persona2.nombre);

//Escritura 2
function imprimirNombreMayusculas2(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

console.log("Escritura 2");
imprimirNombreMayusculas2(persona1);
imprimirNombreMayusculas2(persona2);

//Escritura 3
function imprimirNombreMayusculas3(persona) {
    console.log(persona.nombre.toUpperCase());
}

console.log("Escritura 3");
imprimirNombreMayusculas3(persona1);
imprimirNombreMayusculas3(persona2);

//Escritura 4
function imprimirNombreMayusculas4({ nombre }) {
    console.log(nombre.toUpperCase());
}

console.log("Escritura 4");
imprimirNombreMayusculas4(persona1);
imprimirNombreMayusculas4(persona2);

//Escritura 5
console.log("Escritura 5");
imprimirNombreMayusculas4({nombre: 'Alfredo'});