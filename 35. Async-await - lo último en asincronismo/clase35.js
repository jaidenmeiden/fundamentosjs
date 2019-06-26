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

function onError(id) {
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}!`);
}

async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6,7,8,9,10];
    var promesas = ids.map(id => obtenerPersonaje(id));

    try {
        var personajes = await Promise.all(promesas);
        for (var i = 0; i < personajes.length; i++){
            console.log(`Hola yo soy de nuevo, ${personajes[i].name} y estoy en ${personajes[i].url}`);
        }
    } catch (id) {
        onError(id);
    }
}

obtenerPersonajes();