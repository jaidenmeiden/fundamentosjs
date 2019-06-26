console.warn('En JavaScript se habla de prototipos y no de clases ya que no existe la herencia especificamente hablando');

//Prototipo de persona
function Persona(nombre, apellido, altura) {//Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
    //El "return this" esta implicito y no es necesario ponerlo
    //return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyalto = function () {
    if(this.altura > 1.80) {
        console.log(`Soy alto con ${this.altura}`);
    } else {
        console.log(`No soy alto, ya que solo mido ${this.altura}`);
    }
}

var jaiden = new Persona('Jaiden', 'Riaño', 1.83);
var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);

jaiden.saludar();
jaiden.soyalto();
diana.saludar();
diana.soyalto();
sebastian.saludar();
sebastian.soyalto();