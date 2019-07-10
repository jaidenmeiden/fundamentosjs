function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('guevon');

saludoArgentino('Jaiden'); // Hola Jaiden che
saludoMexicano('Jaiden'); // Hola Jaiden güey
saludoColombiano('Jaiden'); // Hola Jaiden guevon