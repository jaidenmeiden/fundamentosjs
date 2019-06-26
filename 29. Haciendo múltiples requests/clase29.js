const API_URL = 'https://swapi.co/api/';
const PEOBLE_URL = 'people/:id';

var peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', 0)}`;
const opts = {crossDomain: true};


const onResponse = function(data) {
    console.log(`Hola yo soy de nuevo, ${data.name} y estoy en ${data.url}`)
}

function obetenerPersonaje(id) {
    peopleURL = `${API_URL}${PEOBLE_URL.replace(':id', id)}`;
    //Request
    $.get(peopleURL, opts, onResponse);
}

for(var i = 1; i <= 10; i++) {
    obetenerPersonaje(i);
}