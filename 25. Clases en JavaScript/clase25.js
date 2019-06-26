console.warn('Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.');
console.warn('La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.');
console.warn('El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase..');

class Persona {
    constructor(nombre, apellido, altura) {//Constructor
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyalto() {
        if (this.altura === undefined) {
            return "Altuta es indefinida";
        } else {
            return this.altura > 1.80;
        }

    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);
var jaiden = new Desarrollador('Jaiden', 'Riaño', 1.83);

console.log(diana);
diana.saludar();
console.log(diana.soyalto());
console.log(sebastian);
sebastian.saludar();
console.log(sebastian.soyalto());
console.log(jaiden);
jaiden.saludar();
console.log(jaiden.soyalto());