console.warn('En JavaScript es importante la ubicación de las funciones. Si coloco la función despues de la llamada va a salir un error.');

//Prototipo de persona
function Persona(nombre, apellido, altura) {//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyalto = function () {
    return this.altura > 1.80;
}

var jaiden = new Persona('Jaiden', 'Riaño', 1.83);
var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);

jaiden.saludar();
console.log(jaiden.soyalto());
diana.saludar();
console.log(diana.soyalto());
sebastian.saludar();
console.log(sebastian.soyalto());