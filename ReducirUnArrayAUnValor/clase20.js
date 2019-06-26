var jaiden = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    altura: 1.83,
    cantidadDeLIbros: 182
};

var sergio = {
    nombre: 'Sergio',
    apellido: 'Hernandez',
    altura: 1.70,
    cantidadDeLIbros: 110
};

var felipe = {
    nombre: 'Felipe',
    apellido: 'Hernandez',
    altura: 1.70,
    cantidadDeLIbros: 72
};

var carlos = {
    nombre: 'Carlos',
    apellido: 'Niño',
    altura: 1.85,
    cantidadDeLIbros: 97
};

var daniel = {
    nombre: 'Daniel',
    apellido: 'Jimenez',
    altura: 1.65,
    cantidadDeLIbros: 57
};

var personas = [jaiden, sergio, felipe, carlos, daniel];

console.warn('personas: ');
console.log(personas);

//Funciones
const esAlta = ({ altura }) => altura > 1.8;

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

const reducer = (acum, {cantidadDeLIbros}) => acum + cantidadDeLIbros;

//Actividades
var personasAltas = personas.filter(esAlta);

console.warn('personasAltas: ');
console.log(personasAltas);

var personasCms = personas.map(pasarAlturaACms);

console.warn('personasCms: ');
console.log(personasCms);

console.warn('Forma tradicional para obtener un valor: ');
var acum = 0;

for(var i = 0;i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLIbros;
}
console.log(`En total todo tienen ${acum} libros`);

console.warn('Reduciendo a un valor: ');

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todo tienen ${acum} libros`);