function calcularAreaTerreno (largura, comprimento) {
    let area = (largura * comprimento)
    return area
}

let largura = parseFloat(prompt('Insira a largura do terreno:'))

let comprimento = parseFloat(prompt('Insira o comprimento do terreno:'))

document.write('O terreno possui ' +calcularAreaTerreno(largura, comprimento)+ ' metros quadrados.')
