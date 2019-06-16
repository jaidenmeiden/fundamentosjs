var persona1 = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    edad: 38,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    ciclista: true
};

function imprimirProfesiones (persona) {
    console.log(`${persona.nombre} es: `);
    if(persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es Ingeniero');
    }
    if(persona.cocinero) {
        console.log('Cocinero');
    } else {
        console.log('No es Cocinero');
    }
    if(persona.cantante) {
        console.log('Cantante');
    } else {
        console.log('No es Cantante');
    }
    if(persona.dj) {
        console.log('DJ');
    } else {
        console.log('No es DJ');
    }
    if(persona.guitarrista) {
        console.log('Guitarrista');
    } else {
        console.log('No es Guitarrista');
    }
    if(persona.ciclista) {
        console.log('Ciclista');
    } else {
        console.log('No es Ciclista');
    }
    if(persona.edad > 17) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

imprimirProfesiones(persona1);