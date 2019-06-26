const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

var peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 0)}`;
const opts = {crossDomain: true};


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', id)}`;
        $.get(peopleURL, opts, function (data) {
            resolve(data);
        }).fail(function () {
            reject(id);
        });
    });
}

obtenerPersonaje(1)
    .then(data => {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
        return obtenerPersonaje(2);
    })
    .then(data => {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
        return obtenerPersonaje(3);
    })
    .then(data => {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
        return obtenerPersonaje(4);
    })
    .then(data => {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
    })
    .catch(function (id) {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}!`);
    });