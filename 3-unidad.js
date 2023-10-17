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
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros *valido esto o finjo demencia?*
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
