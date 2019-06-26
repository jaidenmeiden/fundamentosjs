var jaiden = {
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

var juan = {
    nombre: 'Juan',
    apellido: 'Cifuentes',
    edad: 16
};

const MAYORIA_DE_EDAD = 18;

//Cuando a una variable es asignada un función es recomendable
//colocar 'const' para evidenciar que es una función y no una variable
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
};

function imprimirSiEsMayorDeEdad (persona) {
    if(esMayorDeEdad(persona)) {
        return `${persona.nombre} es mayor de edad`;
    } else {
        return `${persona.nombre} es menor de edad`;
    }
}

console.log(imprimirSiEsMayorDeEdad(jaiden));
console.log(imprimirSiEsMayorDeEdad(juan));