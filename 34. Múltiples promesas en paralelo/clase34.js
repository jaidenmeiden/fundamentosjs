const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

var peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 0)}`;
const opts = {crossDomain: true};
var ids = [1,2,3,4,5,6,7,8,9,10];


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

//Forma 1
var promesas1 = ids.map(function (id) {
   return obtenerPersonaje(id);
});
Promise
    .all(promesas1)
    .then(personajes => console.log(personajes))
    .catch(onError)

//Forma 2
var promesas2 = ids.map(id => obtenerPersonaje(id));
Promise
    .all(promesas2)
    .then(function (personajes){
        for (var i = 0; i < personajes.length; i++){
            console.log(`Hola yo soy de nuevo, ${personajes[i].name} y estoy en ${personajes[i].url}`);
        }
    })
    .catch(onError)