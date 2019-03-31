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

//Cumpleaños

//Este cambio afecta globalmente el valor del objeto persona, ya que
//el objeto es pasado como referencia en JavaScript
function cumpleanos(persona) {
    persona.edad += 1;
}

function cumpleanosObj(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}