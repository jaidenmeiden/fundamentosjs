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

//Asignar función
const esMayorDeEdad1 = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
};

//Arrow Function
const esMayorDeEdad2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
};

//En JavaScript si una función solo hace un retorno se pueden omitir lo corchetes y el return
const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD;

//En JavaScript como solo interesa la edad tambien se peude desestructurar el objeto
//Desestruturar
const esMayorDeEdad4 = ({edad}) => edad >= MAYORIA_DE_EDAD;

//Retornar negación
const esMayorDeEdad5 = ({edad}) => !(edad >= MAYORIA_DE_EDAD);


//Las dos funciones anterior son equivalentes (NO 100% equivalentes, pero si son equivalentes)

function imprimirSiEsMayorDeEdad1 (persona) {
    if(esMayorDeEdad1(persona)) {
        return `${persona.nombre} es mayor de edad`;
    } else {
        return `${persona.nombre} es menor de edad`;
    }
}

function imprimirSiEsMayorDeEdad2 (persona) {
    if(esMayorDeEdad2(persona)) {
        return `${persona.nombre} es mayor de edad`;
    } else {
        return `${persona.nombre} es menor de edad`;
    }
}

function imprimirSiEsMayorDeEdad3 (persona) {
    if(esMayorDeEdad3(persona)) {
        return `${persona.nombre} es mayor de edad`;
    } else {
        return `${persona.nombre} es menor de edad`;
    }
}

function imprimirSiEsMayorDeEdad4 (persona) {
    if(esMayorDeEdad4(persona)) {
        return `${persona.nombre} es mayor de edad`;
    } else {
        return `${persona.nombre} es menor de edad`;
    }
}

function imprimirSiEsMayorDeEdad5 (persona) {
    if(esMayorDeEdad5(persona)) {
        return `${persona.nombre} es menor de edad`;
    } else {
        return `${persona.nombre} es mayor de edad`;
    }
}

function permitirAcceso (persona) {
    if(!esMayorDeEdad4(persona)) {
        return 'Acceso denegado';
    } else {
        return 'Puede ingresar';
    }
}

console.warn('Asignar función: ');
console.log(imprimirSiEsMayorDeEdad1(jaiden));
console.log(imprimirSiEsMayorDeEdad1(juan));
console.warn('Arrow Function: ');
console.log(imprimirSiEsMayorDeEdad2(jaiden));
console.log(imprimirSiEsMayorDeEdad2(juan));
console.warn('En JavaScript si una función solo hace un retorno se pueden omitir lo corchetes y el return: ');
console.log(imprimirSiEsMayorDeEdad3(jaiden));
console.log(imprimirSiEsMayorDeEdad3(juan));
console.warn('Desestruturar: ');
console.log(imprimirSiEsMayorDeEdad4(jaiden));
console.log(imprimirSiEsMayorDeEdad4(juan));
console.warn('Retorno negación: ');
console.log(imprimirSiEsMayorDeEdad5(jaiden));
console.log(imprimirSiEsMayorDeEdad5(juan));
console.warn('Negación: ');
console.log(permitirAcceso(jaiden));
console.log(permitirAcceso(juan));