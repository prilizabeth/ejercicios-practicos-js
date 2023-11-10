// Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, M: Mujer), edad (en años) y altura (en centímetros). 
// Realice un programa para calcular e informar:
// a. El porcentaje de mujeres mayores a 25 años.
// b. El porcentaje de hombres menores de 18 años.
// c. El promedio de edad de las mujeres.
// d. El promedio de altura de los hombres.
// e. La menor edad ingresada.
// f. La mayor altura ingresada.

const encuesta = [
    {
        sexo,
        edad,
        altura,
    }
];

let mujeres = 0;
let hombres = 0;

let mujeresMayores25años = 0;
let hombresMenores18años = 0;
let mujeresSumaEdad = 0;
let hombresSumaAltura = 0;
let menorEdad = encuesta[0].edad;
let mayorAltura = encuesta[0].altura;

function datosEncuesta() {
    for (const persona of encuesta) {
        if(persona.sexo == 'M' && persona.edad > 25) {
            mujeresMayores25años++;
        }
        if(persona.sexo == 'H' && persona.edad < 18) {
            hombresMenores18años++;
        }
        if(persona.sexo == 'M') {
            mujeresSumaEdad += persona.edad;
            mujeres++;
        }
        if(persona.sexo == 'H') {
            hombresSumaAltura += persona.altura;
            hombres++;
        }
        if(persona.edad < menorEdad) {
            menorEdad = persona.edad;
        }
        if(persona.altura > mayorAltura) {
            mayorAltura = persona.altura;
        }
    }

    let porcentajeMujeresMayores25años = (mujeresMayores25años * 100) / encuesta.length;
    let porcentajeHombresMenores18años = (hombresMenores18años * 100) / encuesta.length;
    let promedioEdadMujeres = mujeresSumaEdad / mujeres;
    let promedioAlturaHombres = hombresSumaAltura / hombres;

    return console.log(`El porcentaje de mujeres mayores a 25 años: ${porcentajeMujeresMayores25años}. 
    El porcentaje de hombres menores de 18 años: ${porcentajeHombresMenores18años}. 
    El promedio de edad de las mujeres: ${promedioEdadMujeres}.
    El promedio de altura de los hombres: ${promedioAlturaHombres}.
    La menor edad ingresada: ${menorEdad}.
    La mayor altura ingresada: ${mayorAltura}.`);
}

