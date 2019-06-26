const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

const peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 1)}`;
const opts = {crossDomain: true};

const onResponse = function(data) {
    console.log(arguments);//Muestra todos los argumentos enviados a la función
    console.log(`Hola yo soy de nuevo, ${data.name}`)
}

//Request 1
$.get(peopleURL, opts, function (data) {
    console.log(arguments);//Muestra todos los argumentos enviados a la función
    console.log(`Hola yo soy, ${data.name}`)
});

//Request 2
$.get(peopleURL, opts, onResponse);