 /*
    En ciencias de la computación se dice que una función o expresión tiene ""efecto colateral"",
    ""efecto de lado"" o ""efecto secundario"" si esta, además de retornar un valor, modifica el estado de su entorno.
    Por ejemplo, una función puede modificar una variable global o estática, modificar uno de sus argumentos,
    escribir datos a la pantalla o a un archivo, o leer datos de otras funciones que tienen efecto secundario.
    Los efectos secundarios frecuentemente hacen que el comportamiento de un programa sea más difícil de predecir.
  */

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Efecto de lado
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 console.warn("Efecto de lado");

 var persona1 = {
     nombre: 'Jaiden',
     apellido: 'Meiden',
     edad: 38
 }

 const cumpleanos = persona => persona.edad++;

 console.log(persona1);
 cumpleanos(persona1);
 console.log(persona1);
 cumpleanos(persona1);
 console.log(persona1);

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Evitando efecto de lado
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 console.warn("Evitando efecto de lado");
 
 var persona2 = {
     nombre: 'Diana',
     apellido: 'Muriel',
     edad: 28
 }

 const cumpleanosInmutable = persona => ({
     ...persona,
     edad: persona.edad + 1
 });

 console.log("Original:");
 console.log(persona2);
 console.log("Modificado:");
 console.log(cumpleanosInmutable(persona2));
 console.log("Original:");
 console.log(persona2);