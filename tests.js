describe("calcularString()", (string) => {

    it("debería sumar 0, 1 o 2 números, y devolver su suma", () => {
        const string = "4, 7, 5";
        const resultado = calcularString(string)

        expect(resultado).to.equal(16)
    })
    it("debería devolver cero si el string se ingresa vacío", () => {
        const string = "";
        const resultado = calcularString(string)

        expect(resultado).to.equal(0)
    })

    it("debería aceptar una cantidad indefinida de números", () => {
        const string =  "4, 7, 5, 8, 40, 50, 20, 30";
        const resultado = calcularString(string)

        expect(resultado).to.equal(164)
    })
    it("debería aceptar un delimitador definido por el usuario", () => {
        const string =  "4 7 5 8 40 50 20 30";
        const string1 = "4-7-5-8-40-50-20-30";
        const resultado = calcularString(string,  ' ')
        const resultado1 = calcularString(string1, '-')

        expect(resultado).to.equal(164)
        expect(resultado1).to.equal(164)
    })

    it("debería tirar error si se le pasa un número negativo", () => {
        const string =  "4, -7, 5, 8, 40, 50, 20, 30";
        const fn = () => {
            calcularString(string)
        }
        expect(fn).to.throw(`No se pueden ingresar números negativos. Ingresó: -7`)
 
    })
    
    it("debería tirar en el error los números negativos si se le pasan varios números negativos", () => {
        const string =  "4, -7, 5, 8, 40, -50, 20, 30";
        const fn = () => {
            calcularString(string)
        }
        expect(fn).to.throw(`No se pueden ingresar números negativos. Ingresó: -7 -50`)
 
    })

    it("debería ignorar los valores mayores a 1000", () => {
        const string =  "4, 7, 5, 1008, 40, 50, 2220, 30";
        const resultado = calcularString(string)
        expect(resultado).to.equal(136)
 
    })
})


describe("moverElemento()", (tablero, coordenadas, movimiento) => {

    it("debería devolver las coordenadas correspondientes a la casilla a la que el usuario se movió", () => {
        const tablero = [
            ["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "11", "12"],
            ["13", "14", "15", "16"],
            ["17", "18", "19", "20"],
        ];
        const coordenadas = [2, 2];
        const movimiento = "ARRIBA";
        const movimiento1 = "ABAJO";
        const movimiento2 = "DERECHA";
        const movimiento3 = "IZQUIERDA";

        expect(moverElemento(tablero, coordenadas, movimiento)).to.equal("7")
        expect(moverElemento(tablero, coordenadas, movimiento1)).to.equal("15")
        expect(moverElemento(tablero, coordenadas, movimiento2)).to.equal("12")
        expect(moverElemento(tablero, coordenadas, movimiento3)).to.equal("10")


    })
})