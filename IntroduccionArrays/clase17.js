var jaiden = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    altura: 1.83
};

var sergio = {
    nombre: 'Sergio',
    apellido: 'Hernandez',
    altura: 1.83
};

var felipe = {
    nombre: 'Felipe',
    apellido: 'Hernandez',
    altura: 1.83
};

var carlos = {
    nombre: 'Carlos',
    apellido: 'Niño',
    altura: 1.83
};

var daniel = {
    nombre: 'Daniel',
    apellido: 'Jimenez',
    altura: 1.83
};

var personas = [jaiden, sergio, felipe, carlos, daniel];

for(var i = 0; i < personas.length; i++) {
    persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}