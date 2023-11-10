// Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar
function informTypeOfNumber() {
    let userNumber = prompt('Ingrese un número por favor');

    if(userNumber == 0) {
        alert('El número ingresado es cero');
    } else if(userNumber % 2 == 0) {
        alert('El número ingresado es par');
    } else {
        alert('El número ingresado es impar');
    }
}

// Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3
function multiploDeTres() {
    let userNumber = prompt('Ingrese un número por favor');

    if(userNumber % 3 == 0) {
        alert('El número ingresado es múltiplo de 3');
    } else {
        alert('El número ingresado no es múltiplo de 3');
    }
}

// Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal
function esVocal() {
    let userLetra = prompt('Ingrese una letra por favor').toLowerCase();

    if(userLetra === 'a' || userLetra === 'e' || userLetra === 'i' || userLetra === 'o' || userLetra === 'u') {
        alert('La letra ingresada es vocal');
    } else {
        alert('La letra ingresada no es vocal');
    }
}

// Se le solicita al usuario que ingrese los extremos de un rango numérico y un número
// Realice un programa para informar si el número está dentro del rango
// Si está en rango, informar si el número es par
// Si no está dentro del rango, informar si es número es impar
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros
function estaEnRango() {
    let rangoNum = prompt('Ingrese un rango numérico con al menos 5 números de diferencia, separados por espacio');
    let unNum = prompt('Ingrese un número');
    
    const rangoNumArr = rangoNum.split(' ').map(Number);

    if(unNum >= rangoNumArr[0] && unNum <= rangoNumArr[1]) {
        if(unNum % 2 == 0) {
            alert('Está en el rango indicado y es un número par');
        } else {
            console.log('Está en el rango pero no es número par');
        }
    } else {
        if(unNum % 2 == !0) {
            alert('No está en el rango indicado y es un número impar');
        } else {
            console.log('No está en el rango pero no es número impar');
        }
    }
}

// Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /)
// Realice un programa para calcular e informar la operación solicitada entre ambos números
function mathOperation() {
    let firstNum = prompt('A continuación se realizará una operación matemática, ingrese el primer número');
    let secondNum = prompt('Ingrese el segundo número');
    let operator = prompt('Ingrese el operador que desee; puede ser +, -, *, /');
    let result;

    switch(operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            alert('El operador ingresado no es válido');
    }

    return alert(`Usted realizó la siguiente operación: ${firstNum} ${operator} ${secondNum} = ${result}`);
}

// Se le solicita al usuario que ingrese los tres lados de un triángulo
// Realice el algoritmo para informar si el triángulo es equilátero, isósceles o escaleno
function whatTypeTriangle() {
    let side1 = parseFloat(prompt('Ingrese la longitud del primer lado de su triángulo'));
    let side2 = parseFloat(prompt('Ingrese la longitud del segundo lado de su triángulo'));
    let side3 = parseFloat(prompt('Ingrese la longitud del tercer lado de su triángulo'));

    if(side1 == side2 && side2 == side3 && side1 == side3) {
        alert('Este triángulo es equilátero');
    } else if(side1 == side2 || side2 == side3 || side1 == side3) {
        alert('Este triángulo es isosceles');
    } else {
        alert('Este triángulo es escaleno');
    }
}

// Realizar un sistema para el cálculo de sueldo de una empresa
// Se le solicita al usuario que ingrese la categoría a la que pertenece que define el sueldo básico mensual
// (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las horas extras
// Se sabe que: 
// a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.
// b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.
// Realice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000.
function nuevoSueldoMensual() {
    let categoria = parseFloat(prompt('Ingrese la categoría a la que pertenece (1, 2, 3)'));
    let horaExtra = parseFloat(prompt('Ingrese la cantidad de horas extras que realizó'));
    let sueldoBasico;
    let bono = 0;

    switch(categoria) {
        case 1:
            sueldoBasico = 2000;
            break;
        case 2: 
            sueldoBasico = 3000;
            break;
        case 3:
            sueldoBasico = 4000;
            break;
        default:
            console.log('No existe esa categoría');
    }
    
    if(categoria == 1 && horaExtra > 20) {
        bono += 500;
    } else if(categoria == 3 && horaExtra > 30) {
        bono += 1000;
    } else {
        console.log('no hay bono aplicable');
    }
  
    sueldoTotal = sueldoBasico + bono;
    
    if(sueldoTotal > 4000) {
        alert(`Su sueldo mensual es u$s${sueldoTotal}. Supera los u$s4000`);
    } else {
        alert(`Su sueldo mensual es u$s${sueldoTotal}. No supera los u$s4000`);
    }
}

