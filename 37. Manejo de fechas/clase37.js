//Calcular la edad en días desde el nacimiento
function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 *60 *24; // Cuantos milisegundos hay en un día
    //Calcular la diferencia entre dos fechas
    //La siguiente función calcula el tiempo en milisegundos
    const diferencia = Math.abs(fecha1 - fecha2);//Se calcula el número absoluto de esta cuenta si ""fecha2"" es menor que ""fecha1""

    const dias1 = diferencia/unDia;
    const dias2 = Math.floor(dias1);
    const horas1 = (dias1 - dias2) * 24;
    const horas2 = Math.floor(horas1);
    const minutos1 = (horas1 - horas2) * 60;
    const minutos2 = Math.floor(minutos1);
    const segundos1 = (minutos1 - minutos2) * 60;
    const segundos2 = Math.floor(segundos1);

    return `${dias2} día(s), ${horas2} horas, ${minutos2} minutos, ${segundos2} segundos`;
 }

const hoy = new Date();
const nacimiento = new Date(1980, 6, 23);

console.log(diasEntreFechas(nacimiento, hoy));
