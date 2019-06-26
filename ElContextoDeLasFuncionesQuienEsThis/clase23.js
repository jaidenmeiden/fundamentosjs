console.warn('En JavaScript cuando construyo una arrow function y llamo al objeto [this], no me estoy refiriendo al objeto específico (En este ejemplo Persona), sino al objeto global [window]. [this], no es quien esperamos que sea en JavaScript');

//Prototipo de persona
function Persona(nombre, apellido, altura) {//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyalto = () => this.altura > 1.80;
console.error('Al llamar la función asi: Persona.prototype.soyalto = () => this.altura > 1.80; el objeto [this] se refiere a [window]')

var jaiden = new Persona('Jaiden', 'Riaño', 1.83);
var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);

jaiden.saludar();
console.log(jaiden.soyalto());
diana.saludar();
console.log(diana.soyalto());
sebastian.saludar();
console.log(sebastian.soyalto());

console.log('[this] === [window]');
console.log(this === window);