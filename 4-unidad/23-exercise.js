// Se le solicita al usuario que ingrese los extremos de un rango numérico y una cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.

let rangoNum = prompt('Ingrese dos números con al menos 5 números de diferencia, separados por espacio').split(' ').map(Number);
let randomNumsArr = prompt('Ingrese varios números diferentes, separados por espacio').split(' ').map(Number);

function estaEnRango(rangoNumbers, numbersArr) {
    // console.log(rangoNumbers);
    // console.log(numbersArr);

    for (let i = 0; i < numbersArr.length; i++) {
        
        if(numbersArr[i] >= rangoNumbers[0] && numbersArr[i] <= rangoNumbers[1]) {
            if(numbersArr[i] % 2 == 0) {
                alert(`${numbersArr[i]} está en el rango indicado y es un número par`);
            } else {
                console.log('Está en el rango pero no es número par');
            }
        } else {
            if(numbersArr[i] % 2 == !0) {
                alert(`${numbersArr[i]} no está en el rango indicado y es un número impar`);
            } else {
                console.log('No está en el rango pero no es número impar');
            }
        }
    }
    
}

estaEnRango(rangoNum, randomNumsArr);