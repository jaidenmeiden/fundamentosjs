const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

var peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 0)}`;
const opts = {crossDomain: true};


function obtenerPersonaje(id, callback) {
    peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', id)}`;
    $.get(peopleURL, opts, callback).fail(function () {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}!`)
    });
}

//Callbacks hell => El infierno de los calbacks
obtenerPersonaje(1, function (data) {
    console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
    obtenerPersonaje(2, function (data) {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
        obtenerPersonaje(3, function (data) {
            console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
            obtenerPersonaje(4, function (data) {
                console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                obtenerPersonaje(5, function (data) {
                    console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                    obtenerPersonaje(6, function (data) {
                        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                        obtenerPersonaje(7, function (data) {
                            console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                            obtenerPersonaje(8, function (data) {
                                console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                                obtenerPersonaje(9, function (data) {
                                    console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                                    obtenerPersonaje(10, function (data) {
                                        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});