const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

var peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 0)}`;
const opts = {crossDomain: true};


function obtenerPersonaje(id, callback) {
    peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', id)}`;
    $.get(peopleURL, opts, function(data) {
        console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`);

        if(callback) {
            callback();
        }
    });
}

//Callbacks hell => El infierno de los calbacks
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {
                            obtenerPersonaje(8, function () {
                                obtenerPersonaje(9, function () {
                                    obtenerPersonaje(10);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});