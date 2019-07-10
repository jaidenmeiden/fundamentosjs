var persona1 = {
    nombre: 'Jaiden',
    apellido: 'Meiden'
}

var persona2 = {
    nombre: 'Diana',
    apellido: 'Muriel'
}

console.warn("this, hace referencia al window:");
function saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`)
}
saludar();

console.warn("this, hace referencia a persona (const):");
const saludarObjeto1 = saludar.bind(persona1);
saludarObjeto1();
const saludarObjeto2 = saludar.bind(persona2);
saludarObjeto2();

console.warn("this, hace referencia a persona (let):");
let saludarObjeto = saludar.bind(persona1);
saludarObjeto();
saludarObjeto = saludar.bind(persona2);
saludarObjeto();

console.warn("con parametro:");
function saludar1(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}
console.warn("La función bind() no ejecuta una función, sino que retorna una nueva función.");
let saludarObjetoParametro = saludar1.bind(persona1);
saludarObjetoParametro();
saludarObjetoParametro = saludar1.bind(persona1, 'Hola che');
saludarObjetoParametro();
saludarObjetoParametro = saludar1.bind(persona1, 'Hola güey');
saludarObjetoParametro();
saludarObjetoParametro = saludar1.bind(persona1, 'Hola guevon');
saludarObjetoParametro();
console.warn("La función call() si ejecuta la función.");
saludar1.call(persona1);
saludar1.call(persona1, 'Hola che');
saludar1.call(persona1, 'Hola güey');
saludar1.call(persona1, 'Hola guevon');
console.warn("La función apply(), es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores.");
saludar1.apply(persona1);
saludar1.apply(persona1, ['Hola che']);
saludar1.apply(persona1, ['Hola güey']);
saludar1.apply(persona1, ['Hola guevon']);


console.warn("setTimeout:");
setTimeout(saludar.bind(persona2), 1000);

