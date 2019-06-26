console.warn('En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.');

class Persona {
    constructor(nombre, apellido, altura) {//Constructor
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fnParametro) {
        //Opción 1
        //var nombre = this.nombre;
        //var apellido = this.apellido;
        //Opción 2
        var {nombre, apellido} = this;


        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fnParametro) {
            fnParametro(nombre, apellido, false);
        }
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

    saludar(fnParametro) {
        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fnParametro) {
            fnParametro(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDEv) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDEv){
        console.log(`No sabía que eras un desarrolador!`)
    }
}

var diana = new Persona('Diana', 'Muriel', 1.65);
var sebastian = new Persona('Sebastian', 'Riaño Muriel', 1.90);
var jaiden = new Desarrollador('Jaiden', 'Riaño', 1.83);

console.log(diana);
diana.saludar();
console.log(diana.soyalto());
console.log(sebastian);
sebastian.saludar(responderSaludo);
console.log(sebastian.soyalto());
console.log(jaiden);
jaiden.saludar(responderSaludo);
console.log(jaiden.soyalto());