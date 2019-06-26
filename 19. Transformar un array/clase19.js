var jaiden = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    peso: 97,//En Kg
    altura: 1.83
};

var sergio = {
    nombre: 'Sergio',
    apellido: 'Hernandez',
    peso: 70,//En Kg
    altura: 1.70
};

var felipe = {
    nombre: 'Felipe',
    apellido: 'Hernandez',
    peso: 68,//En Kg
    altura: 1.70
};

var carlos = {
    nombre: 'Carlos',
    apellido: 'Niño',
    peso: 80,//En Kg
    altura: 1.85
};

var daniel = {
    nombre: 'Daniel',
    apellido: 'Jimenez',
    peso: 60,//En Kg
    altura: 1.65
};

var personas = [jaiden, sergio, felipe, carlos, daniel];

console.warn('personas: ');
console.log(personas);
const esAlta = ({ altura }) => altura > 1.8;

//Si se utiliza la función a continuación "pasarAlturaACms" 
//se modifica directamente las propiedades del objeto 
//persona y por dicha razón se ven afectados los demas 
//objetos que usan dichas propiedades.
//Para que esto no sea perceptible por otrs objetos se debe
//crear un nuevo objeto.
const pasarPesoAGramos = persona => {
    persona.peso *= 1000;//Se transforma a gramos
    return persona
}
const pasarAlturaACms1 = persona => {
    return {//Retorna un nuevo objeto 
        ...persona,
        altura: persona.altura * 100
    };
}
const pasarAlturaACms2 = persona => ({//Retorna un nuevo objeto 
    ...persona,
    altura: persona.altura * 100
})

var personasGramos = personas.filter(pasarPesoAGramos);

console.warn('personasGramos: ');
console.log(personasGramos);

var personasAltas = personas.filter(esAlta);

console.warn('personasAltas: ');
console.log(personasAltas);

var personasCms1 = personas.map(pasarAlturaACms1);

console.warn('personasCms1: ');
console.log(personasCms1);

var personasCms2 = personas.map(pasarAlturaACms2);

console.warn('personasCms2: ');
console.log(personasCms2);