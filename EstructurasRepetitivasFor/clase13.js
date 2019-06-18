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

const DIAS_DEL_ANO = 365;
const INCREMENTO_PESO= 0.25;

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const reduceDePeso = persona => persona.peso -= INCREMENTO_PESO;

console.log(`Al inico del año ${jaiden.nombre} pesa ${jaiden.peso}Kg`);
for (var i = 1; i<= DIAS_DEL_ANO; i++) {
    var random = Math.random();//Esta función arroja un aleatorio entre 0...1
    if(random < 0.25){
        aumentaDePeso(jaiden);
    }else if(random < 0.50){
        reduceDePeso(jaiden);
    }
}
console.log(`Al final del año ${jaiden.nombre} pesa ${jaiden.peso.toFixed(2)}Kg`);
