// Realice un algoritmo que muestre el nombre y apellido de un usuario
function showCompleteName(firstname, lastname) {
    return console.log(firstname + ' ' + lastname);
}

// Realice un algoritmo que muestre el promedio de 3 notas
function promedioNotas(nota1, nota2, nota3) {
    return console.log((nota1 + nota2 + nota3) / 3);
}

// Realice el algoritmo para calcular e informar el perímetro del triángulo
function trianguloPerimetro(lado1, lado2, lado3) {
    return console.log(lado1 + lado2 + lado3);
}

// Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado
function calcularCuadrado(lado) {
    return console.log('El perímetro es ' + lado * 4 + ' y el área es ' + lado * lado);
}

// Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo
function calcularRectangulo(ladoL, ladoW) {
    return console.log('El perímetro es ' + (ladoL + ladoW) * 2 + ' y el área es ' + ladoL * ladoW);
}

// Realice el algoritmo para calcular e informar el resto de la división entera entre los valores
function restoDivision(dividendo, divisor) {
    return console.log(dividendo % divisor);
}

// Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario
function welcome(firstname, lastname) {
    return console.log('Bienvenido ' + firstname + ' ' + lastname);
}

// Realice el algoritmo para calcular e informar el perímetro y el área del círculo
// Se considerará para este ejercicio que el valor de PI será 3.1416
const pi = 3.1416;
function calcularCirculo(radio) {
    return console.log('El perímetro es ' + 2 * pi * radio + ' y el área es ' + pi * Math.pow(radio, 2));
}

