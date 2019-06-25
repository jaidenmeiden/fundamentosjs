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

//Opcion 1
console.warn('Opción 1');
const esAltaA = (persona) => {
    return persona.altura > 1.8;
}

var personasAltasA = personas.filter(esAltaA);

for(var i = 0; i < personasAltasA.length; i++) {
    persona = personasAltasA[i];
    console.log(`${persona.nombre} es una persona alta y mide ${persona.altura} metros`)
}

//Opcion 2
console.warn('Opción 2');
const esAltaB = persona => persona.altura > 1.8;

var personasAltasB = personas.filter(esAltaB);

for(var i = 0; i < personasAltasB.length; i++) {
    persona = personasAltasB[i];
    console.log(`${persona.nombre} es una persona alta y mide ${persona.altura} metros`)
}

//Opcion 3
console.warn('Opción 3');

var personasAltasC = personas.filter(function (persona){
    return persona.altura > 1.8;
});

for(var i = 0; i < personasAltasC.length; i++) {
    persona = personasAltasC[i];
    console.log(`${persona.nombre} es una persona alta y mide ${persona.altura} metros`)
}

//Opcion 4
console.warn('Opción 4');
const esAltaD = ({altura}) => altura > 1.8;

var personasAltasD = personas.filter(esAltaD);

for(var i = 0; i < personasAltasD.length; i++) {
    persona = personasAltasD[i];
    console.log(`${persona.nombre} es una persona alta y mide ${persona.altura} metros`)
}