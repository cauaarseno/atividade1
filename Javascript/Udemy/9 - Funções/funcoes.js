function calcularAreaTerreno (largura, comprimento) {
    let area = (largura * comprimento)
    return area
}

let largura = parseFloat(prompt('Insira a largura do terreno:'))

let comprimento = parseFloat(prompt('Insira o comprimento do terreno:'))

document.write('O terreno possui ' +calcularAreaTerreno(largura, comprimento)+ ' metros quadrados.')


/*function soma(a, b) {
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) //desconsidera os parâmetros adicionais
console.log(soma(7)) // a variável faltando será um undefined resultando um not a number (NaN)
console.log(soma()) //undefined + undefined = not a number
*/