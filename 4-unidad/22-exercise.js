// Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.

let firstNum = parseInt(prompt('Ingrese el primer número'));
let secondNum = parseInt(prompt('Ingrese el segundo número'));
let thirdNum = parseInt(prompt('Ingrese el tercer número'));

function esMultiplo(num) {
    if(num % 3 == 0 && num % 5 == 0) {
        alert(`${num} es múltiplo de 3 y 5`);
    } else if(num % 3 == 0) {
        alert(`${num} es múltiplo de 3`);
    } else if(num % 5 == 0) {
        alert(`${num} es múltiplo de 5`);
    } else {
        alert(`${num} no es múltiplo de 3 ni 5`);
    }
}

esMultiplo(firstNum);
esMultiplo(secondNum);
esMultiplo(thirdNum);