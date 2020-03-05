// Calculadora de strings
// Crear una función calculadora que tome un string por parámetro
// la función debe sumar 0, 1 o 2 números, y devolver su suma
// los números se ingresan separados por coma
// para un string vacío debe devolver 0
// Permitir a la función aceptar una cantidad indefinida de números
// Permitir a la función aceptar otros delimitadores en vez de coma
// el delimitador se pasa por parámetro
// el delimitador es opcional
// el delimitador defecto es una coma
// Si se pasa un número negativo, debe tirar una excepción
// la excepción debe indicar qué número negativo se pasó
// si hay más de un número negativo, debe indicarlos a todos en la excepción
// Números mayores a 1000 deben ser ignorados

const calcularString = (string, delimitador = ', ') => {

    const array = string.split(`${delimitador}`);
    let suma = 0;
    const negativos = [];

    for (let i = 0; i < array.length; i++) {

        if (Number(array[i]) < 0) {
            negativos.push(Number(array[i]))
        }
        else if (Number(array[i]) < 1000) {
            suma += Number(array[i]);
        }
    }

    if (negativos.length === 0) {
        return suma;
    }
    else {
        throw new Error(`No se pueden ingresar números negativos. Ingresó: ${negativos.join(' ')}`)
    }

}


// Movimiento en Tablero
// Crear una función que acepte un array 2d, unos índices (de array) correspondientes a coordenadas y un movimiento posible que puede ser: ARRIBA, ABAJO, DERECHA, IZQUIERDA (como string, dentro de un array)
// Debe devolver el valor de la casilla correspondiente a mover las coordenadas actuales en la dirección que se pidió
// Si está en algún borde, debe pasar al otro lado
// Debe aceptar varios movimientos y devolver el resultado final de ese movimiento
// Debe arrojar un error si un movimiento no es válido o si las coordenadas iniciales son inválidas
const tablero = [
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "10", "11", "12"],
    ["13", "14", "15", "16"],
    ["17", "18", "19", "20"],
];

const coordenadas = [2, 2];

const moverElemento = (tablero, coordenadas, movimiento) => {
    
    let x = coordenadas[1];
    let y = coordenadas[0];

    let coordenadasDestino = coordenadas.slice();

    switch (movimiento) {
        case "ARRIBA": 
            coordenadasDestino[0] = y - 1;

        break
        case "ABAJO": 
            coordenadasDestino[0] = y + 1;

        break
        case "IZQUIERDA": 
            coordenadasDestino[1] = x - 1;

        break
        case "DERECHA": 
            coordenadasDestino[1] = x + 1;

        break
    }
    
    
    return tablero[coordenadasDestino[0]][coordenadasDestino[1]]
}





