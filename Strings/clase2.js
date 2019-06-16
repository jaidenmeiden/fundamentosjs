var nombre = 'Jaiden', apellido = 'Meiden';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

//Concateneación estandar
var nombreCompleto1 = nombre + ' ' +apellido;
//interporación de texto
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

var ultimaLetra = nombreCompleto1.charAt(nombreCompleto1.lenght - 1);
console.log(ultimaLetra);
