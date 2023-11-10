// Se le solicita al usuario que ingrese una cantidad desconocida de números. 
// Realice un programa para calcular e informar:
//a. La sumatoria de los valores ingresados.
//b. El menor valor ingresado.
//c. El mayor valor ingresado.

let numeros = prompt('Ingresa los números que quieras, separados por espacio').split(' ').map(Number);

function calculosNumerosRandom(numArr) {
    let sumaTotal = 0;
    let minimo = numArr[0];
    let maximo = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
        sumaTotal += numArr[i];

        if(numArr[i] < minimo) {
            minimo = numArr[i];
        }
        if(numArr[i] > maximo) {
            maximo = numArr[i];
        }
        
    }

    return alert(`La suma de los numeros ingresados es ${sumaTotal}. El menor número ingresado es ${minimo} y el mayor número ingresado es ${maximo}`);
}

calculosNumerosRandom(numeros);