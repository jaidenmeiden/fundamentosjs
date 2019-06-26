console.warn('Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.');
console.warn('Hay que recordar que todas las funciones tienen el atributo [prototype]');
//Prototipo hereda
function heredaDe(protoptipoHijo, prototipoPadre) {
    //Funcion vacia que no hace nada y es anonima
    var fn = function(){};
    //A la función vacía le asignamos el prototipo del prototipo padre
    fn.prototype = prototipoPadre.prototype;
    //Al prototipo hijo le vamos a decir que su [prototype] es un nuevo objeto de la función vacía
    protoptipoHijo.prototype = new fn();
    //Asignar la función constructora
    protoptipoHijo.prototype.constructor = protoptipoHijo;
}

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
    if (this.altura === undefined) {
        return "Altuta es indefinida";
    } else {
        return this.altura > 1.80;
    }

}

//Prototipo de desarrollador
function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);
var jaiden = new Desarrollador('Jaiden', 'Riaño', 1.83);

diana.saludar();
console.log(diana.soyalto());
sebastian.saludar();
console.log(sebastian.soyalto());
jaiden.saludar();
console.log(jaiden.soyalto());