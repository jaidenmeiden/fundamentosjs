var signo = prompt('Cual es tu signo?');

switch (signo) {
    case 'aries':
        console.log("Gracias a la presencia lunar, podrá terminar todo lo que se propuso, Sepa que toda su energía vital se desplegará en todas las actividades que tenga.");
        break;
    case 'tauro':
        console.log("Sepa que será el momento justo para que apueste al crecimiento con total libertad. No dude en hacer planes para su futuro, ya que tendrá todo a su favor.");
        break;
    case 'geminis':
    case 'géminis':
        console.log("No le tema al esfuerzo y sea más persistente cuando quiere algo. Tenga presente que los logros suelen tardar y requieren de constancia en el tiempo.");
        break;
    case 'cancer':
    case 'cáncer':
        console.log("Entienda que con su vitalidad y pasión logrará llevar a buen término los proyectos que muchos de su entorno creían irrealizables. Avance sin miedo.");
        break;
    case 'leo':
        console.log("Despreocúpese, ya que será un día donde tendrá la mente relajada y con deseos de conocer nuevos rumbos para su vida. Anímese a lo desconocido.");
        break;
    case 'virgo':
        console.log("Aproveche que sus poderes perceptivos estarán muy afinados. Utilícelos para ayudar a alguien que atraviesa un mal momento y necesita de ayuda.");
        break;
    case 'libra':
        console.log("Hoy será una jornada donde podrá exponer su vitalidad e inteligencia. Ponga en marcha todos los proyectos postergados y en poco tiempo tendrá ganancias.");
        break;
    case 'escorpio':
        console.log("Seguramente la comunicación con los demás será casi imposible en este día. Dedique más atención al modo de expresar sus ideas y todo mejorará.")
        break;
    case 'sagitario':
        console.log("Prepárese, ya que obtendrá una excelente jornada para cualquier proyecto que quiera poner en práctica, en especial si se trata de su vida personal.");
        break;
    case 'capricornio':
        console.log("Hoy se despertará con más valentía que la habitual. Exprese las ideas con franqueza, pero deberá cuidarse de no herir los sentimientos ajenos.");
        break;
    case 'acuario':
        console.log("No dude en agasajar a los que aprecia cuando lo sienta. Recuerde que su hospitalidad lo convierte siempre en un gran anfitrión en su entorno.");
        break;
    case 'pisis':
        console.log("Momento para reconsiderarse muchos aspectos de su vida que lo atormentan. No postergue por más tiempo una decisión que determinará su futuro cercano.");
        break;
    default:
        console.log('No es un signo zodiacal válido')
        break;
}