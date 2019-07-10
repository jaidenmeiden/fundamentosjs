var persona1 = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    edad: 38
}

var persona2 = {
    nombre: 'Diana',
    apellido: 'Muriel',
    edad: 28
}

function esMayorDeEdad1(persona) {//""var"" podrá ser accedida, e incluso modificadda, tanto dentro como fuera de los bloques internos en una función
    if(persona.edad > 18) {
        var mensaje = 'Es mayor de edad';//Esta forma de declaración doble en el mismo bloque, solo es posible con ""var""
    } else {
        var mensaje = 'Es menor de edad';//Esta forma de declaración doble en el mismo bloque, solo es posible con ""var""
    }
    console.log(mensaje);
}

function esMayorDeEdad2(persona) {//Equivamente a la función 1
    var mensaje;
    if(persona.edad > 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

function esMayorDeEdad3(persona) {//""let"" reduce su alcance al bloque de código donde es utilizado
    let mensaje;
    if(persona.edad > 18) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

function esMayorDeEdad4(persona) {//""const"" ya no podra ser modificada ni declarada nuevamente, en ninguna otra parte de la función o el contexto en el que ya existe
    let mensaje;
    const MAYORIA_DE_EDAD = 18;
    const numeros = [1,2,3,4,5,6,7];

    if(persona.edad > MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

function arrayModificar(valor) {//""const"" ya no podra ser modificada ni declarada nuevamente, en ninguna otra parte de la función o el contexto en el que ya existe
    //Un array tipo const no puede ser modificado en estructura,
    //pero si se le puede agregar y modificar un registro

    const numeros = [1,2,3,4,5,6,7];
    console.log(numeros);

    console.log("Modificar registro");
    numeros[0] = 9;
    console.log(numeros);

    console.log("Agregar registro");
    numeros.push(valor);
    console.log(numeros);
}


esMayorDeEdad1(persona1);
esMayorDeEdad2(persona1);
esMayorDeEdad3(persona1);
esMayorDeEdad4(persona1);
arrayModificar(8);

for(var i = 0; i < 10;  i++) {
    console.log(i);
}
console.log(`Termino el for, el valor de i es ${i}`);

for(let j = 0; j < 10;  j++) {
    console.log(j);
}
console.log(`Termino el for, el valor de j es ${j}`);//Esta última instrucción genera error, ya que let solo esta disponible dentro del bloque for