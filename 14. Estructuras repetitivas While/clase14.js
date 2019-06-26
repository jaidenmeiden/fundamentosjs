var jaiden = {
    nombre: 'Jaiden',
    apellido: 'Meiden',
    edad: 38,
    peso: 98
};

var juan = {
    nombre: 'Juan',
    apellido: 'Cifuentes',
    edad: 16,
    peso: 70
};

console.log(`Al inico del año ${jaiden.nombre} pesa ${jaiden.peso}Kg`);

const DIAS_DEL_ANO = 365;
const INCREMENTO_PESO= 0.25;
const META= jaiden.peso -11;

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const reduceDePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = persona => Math.random() < 0.3;
const realizaDeporte = persona => Math.random() < 0.4;

let dias = 0;
while (jaiden.peso > META) {
    //debugger;
    if(comeMucho()) {
        aumentaDePeso(jaiden);
    }
    if(realizaDeporte()) {
        reduceDePeso(jaiden);
    }
    dias++;
}
console.log(`Al final de ${dias} días, ${jaiden.nombre} pesa ${jaiden.peso.toFixed(2)}Kg`);
