//++++++++++++++++++++++++++++++++++++++++++++++++++
//No es necesario colocar un ; en:
//++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('Hola')
var nombre = 'jaiden'
//++++++++++++++++++++++++++++++++++++++++++++++++++
//Es extremadamente innecesario colocar un ; en:
//++++++++++++++++++++++++++++++++++++++++++++++++++
const saludarAjaiden = function () {

};//Es extremadamente innecesario
for (var i = 1; i <= 10;i++) {

};//Es extremadamente innecesario

//++++++++++++++++++++++++++++++++++++++++++++++++++
//Es NECESARIO colocar un ; en:
//++++++++++++++++++++++++++++++++++++++++++++++++++
console.warn("Primer caso A")
console.log("Hola mi nombre es Jaiden");
[1,2,3].forEach(n => console.log(n * 2))
console.warn("Primer caso B")
console.log("Hola mi nombre es Jaiden")
;[1,2,3].forEach(n => console.log(n * 2))
console.warn("Segundo caso A")
console.log("Hola mi nombre es Jaiden");
`${nombre} es un desarrollador`
console.warn("Segundo caso B")
console.log("Hola mi nombre es Jaiden")
;`${nombre} es un desarrollador`
console.warn("Tercer caso")
function calcularDoble(numero) {
    return {
        original: numero, doble: numero * 2
    }
}
console.log(calcularDoble(7))
console.warn("Caso especial, no deberíamos escribir lo que vamos a retornar debajo de return: ");
/*
function calcularDobleError(numero) {
    return //Esto genera un error
    {
        original: numero, doble: numero * 2
    }
}
console.log(calcularDobleError(7))
 */