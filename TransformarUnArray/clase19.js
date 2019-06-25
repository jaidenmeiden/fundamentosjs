var jaiden = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    altura: 1.83
};

var sergio = {
    nombre: 'Sergio',
    apellido: 'Hernandez',
    altura: 1.70
};

var felipe = {
    nombre: 'Felipe',
    apellido: 'Hernandez',
    altura: 1.70
};

var carlos = {
    nombre: 'Carlos',
    apellido: 'Niño',
    altura: 1.85
};

var daniel = {
    nombre: 'Daniel',
    apellido: 'Jimenez',
    altura: 1.65
};

var personas = [jaiden, sergio, felipe, carlos, daniel];

console.warn('personas: ');
console.log(personas);
const esAlta = ({ altura }) => altura > 1.8;
const pasarAlturaACms1 = persona => {
    //persona.altura *= 100;
    //return persona
    return {//Retorna un nuevo objeto 
        ...persona,
        altura: persona.altura * 100
    };
}
const pasarAlturaACms2 = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasAltas = personas.filter(esAlta);

console.warn('personasAltas: ');
console.log(personasAltas);

var personasCms1 = personas.map(pasarAlturaACms1);

console.warn('personasCms1: ');
console.log(personasCms1);

var personasCms2 = personas.map(pasarAlturaACms2);

console.warn('personasCms2: ');
console.log(personasCms2);