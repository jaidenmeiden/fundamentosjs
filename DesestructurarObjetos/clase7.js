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

//Ejemplo
function imprimirNombreMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

console.log("Ejemplo");
imprimirNombreMayusculas(persona1);
imprimirNombreMayusculas(persona2);
imprimirNombreMayusculas({nombre: 'Alfredo'});

//Reto
function imprimirNombreYEdad(persona) {
    //var nombre = persona.nombre
    var { nombre, edad } = persona;
    console.log('Hola me llamó ' + nombre + ' y tengo ' + edad + ' años');
    console.log(`Heyyy me llamó ${nombre} y tengo ${edad} años`);
}

console.log("Reto");
imprimirNombreYEdad(persona1);
imprimirNombreYEdad(persona2);