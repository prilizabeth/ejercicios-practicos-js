// Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). 
// Realice un programa para calcular e informar cada operación deseada entre los dos números. 
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser validados.

let firstNum = parseFloat(prompt('A continuación se realizará una operación matemática, ingrese el primer número'));
let secondNum = parseFloat(prompt('Ingrese el segundo número'));
let operator = prompt('Ingrese el operador que desee; puede ser +, -, *, /');

function mathOperation(num1, num2, mathOperator) {
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        return alert("Por favor, ingrese números válidos");
    }

    switch(mathOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert('El operador ingresado no es válido');
    }

    return alert(`Usted realizó la siguiente operación: ${num1} ${mathOperator} ${num2} = ${result}`);
}

mathOperation(firstNum, secondNum, operator);