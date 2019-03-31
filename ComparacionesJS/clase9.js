var x = 4, y = '4';

console.log("Comparación de valores primitivos: ");
if(x == y) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

if(x === y) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

var persona1 = {
    nombre: 'Jaiden'
};

var persona2 = {
    nombre: 'Jaiden'
};

console.log("Comparación de objetos A: ");
//Esta comparación en los dos casos es diferente ya que los objetos apuntan 
//a diferentes posiciones de memoria
if(persona1 == persona2) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

if(persona1 === persona2) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

console.log("Comparación de objetos B: ");
var persona3 = persona1;
//Esta comparación en los dos casos es igual ya que los objetos apuntan 
//a la misma posición de memoria
if(persona1 == persona3) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

if(persona1 === persona3) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

console.log("Comparación de objetos C: ");
var persona4 = {
    ...persona1
}
//Esta comparación en los dos casos es diferente ya que los objetos apuntan 
//a diferentes posiciones de memoria
if(persona1 == persona4) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}

if(persona1 === persona4) {
    console.log("Iguales");
} else {
    console.log("No son iguales");
}