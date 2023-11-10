// Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una comisión. 
// Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
// El porcentaje de alumnos aprobados (nota igual o superior a 4).
// El porcentaje de alumnos desaprobados (nota inferior a 4).
// El promedio de las notas.

// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

let notas = prompt('Ingrese las notas del parcial de sus alumnos, cada nota separada por espacio').split(' ').map(Number);

function porcentajeAprobadosDesaprobados(notasArr) {
    let aprobados = 0;
    let desaprobados = 0;

    for (let i = 0; i < notasArr.length; i++) {
        if(notasArr[i] < 4) {
            desaprobados++;
        } else if(notasArr[i] >= 4 && notasArr[i] <= 10) {
            aprobados++;
        } else {
            alert('Las notas deben deben ser del 1 al 10');
        }
    }

    let aprobadoPorcentaje = (aprobados * 100) / notasArr.length;
    let desaprobadoPorcentaje = (desaprobados * 100) / notasArr.length;

    return alert(`El porcentaje de alumnos aprobados es ${aprobadoPorcentaje}% y el porcentaje de alumnos desaprobados es ${desaprobadoPorcentaje}%`);
}

function promedioNotas(notasArr) {
    let sumaNotas = 0;

    for (let i = 0; i < notasArr.length; i++) {
        if(notasArr[i] <= 10) {
            sumaNotas += notasArr[i];
        }
    }

    let promedioFinal = sumaNotas / notasArr.length;
    return alert(`El promedio de las notas es ${promedioFinal}`);
}

porcentajeAprobadosDesaprobados(notas);
promedioNotas(notas);