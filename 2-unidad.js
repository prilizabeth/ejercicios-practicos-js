// Se le solicita al usuario que ingrese su nombre y luego su apellido
// Realice un programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario
function welcomeWithAlert() { 
    let firstname = prompt('Dime tu nombre por favor');
    let lastname = prompt('Ahora dime tu apellido por favor');

    return alert('Bienvenido ' + firstname + ' ' + lastname);
}

// Se le solicita al usuario que ingrese el diámetro de un círculo
// Realice un programa para calcular e informar el perímetro y el área del círculo
// Se considerará para este ejercicio que el valor de PI será 3.1416
const pi = 3.1416;
function calcularCirculoConDiametro() {
    let diametro = prompt('Dime el diametro del circulo por favor');
    let radio = diametro / 2;
    return alert('El perímetro es ' + 2 * pi * radio + ' y el área es ' + pi * Math.pow(radio, 2));
}

// Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio
function sumaYPromedio() {
    let cuatroNums = prompt('Ingresa 4 números separados por coma (,)');
    let cuatroNumsArr = cuatroNums.split(',').map(Number);

    let sumaTotal = cuatroNumsArr.reduce((a, b) => a + b, 0);
    let promedioTotal = sumaTotal / 4;
    
    return alert('La suma total es ' + sumaTotal + ' y el promedio es ' + promedioTotal);
}

// Realizar un sistema para el cálculo de sueldos de una empresa
// Se le solicita que ingrese el valor de la hora y la cantidad de horas trabajadas en el mes
// Realice un programa para calcular e informar el sueldo mensual del empleado
function sueldoMensual() {
    let valorHora = prompt('Ingrese el valor de la hora trabajada');
    let cantidadHora = prompt('Ingrese la cantidad de horas trabajadas');

    const sueldo = valorHora * cantidadHora;

    return alert('Su sueldo mensual es $' + sueldo);
}

// Realizar un sistema para el cálculo de sueldos de una empresa
// Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa
// Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono mensual 
// igual al 15% del sueldo por año de antigüedad
function sueldoMensualConBono() {
    let valorHora = prompt('Ingrese el valor de la hora trabajada');
    let cantidadHora = prompt('Ingrese la cantidad de horas trabajadas');
    let añosAntiguedad = prompt('Ingrese los años de antiguedad');

    const sueldo = valorHora * cantidadHora;
    const bonoAntiguedad = (sueldo * 0.15) * añosAntiguedad;
    const sueldoFinal = sueldo + bonoAntiguedad;

    return alert('Su sueldo mensual es $' + sueldoFinal);
}

// Realizar un sistema para el cálculo de sueldo de una empresa de seguros
// Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido
// Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna: 
// un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad
// Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado
function sueldoMensualSeguros() {
    let valorHora = prompt('Ingrese el valor de la hora trabajada');
    let cantidadHora = prompt('Ingrese la cantidad de horas trabajadas');
    let añosAntiguedad = prompt('Ingrese los años de antiguedad');
    let numSegurosVendidos = prompt('Ingrese la cantidad de seguros vendidos');
    let valorSeguroCaro = prompt('Ingrese el valor del seguro más caro que haya vendido');

    const sueldo = valorHora * cantidadHora;
    const bonoSeguroCaro = valorSeguroCaro * 0.5;
    const bonoSegurosVendido = numSegurosVendidos * 0.25;
    const bonoAntiguedad = (sueldo * 0.15) * añosAntiguedad;
    const sueldoFinal = sueldo + bonoSeguroCaro + bonoSegurosVendido + bonoAntiguedad;
    const valorHoraPromedio = sueldoFinal / cantidadHora;

    return alert('El valor promedio de la hora es $' + valorHoraPromedio);
}