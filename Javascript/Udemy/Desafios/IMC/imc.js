let nome = prompt('Insira seu nome:')
let altura = parseFloat(prompt('Insira sua altura em centímetros (ex: 165)'))
let peso = parseFloat(prompt('Insira seu peso'))
let metros = (altura / 100)
let massa = (peso / (metros * metros)).toFixed(2)
document.write(''+nome+' possui índice de massa corporal igual a ' +massa+ ', sendo classificado como: ')
    if (massa < 16) {
        document.write('Baixo peso muito grave.')
    };
    if (massa >= 16 && massa <= 16.99) {
        document.write('Baixo peso grave.')
    }
    if (massa >= 17 && massa <= 18.49) {
        document.write('Baixo peso.')
    }
    if (massa >= 18.50 && massa <= 24.99) {
        document.write('Peso normal.')
    }
    if (massa >= 25 && massa <= 29.99) {
        document.write('Sobrepeso.')
    }
    if (massa >= 30 && massa <= 34.99) {
        document.write('Obesidade grau I.')
    }
    if (massa >= 35 && massa <= 39.99) {
        document.write('Obesidade grau II.')
    }
    if (massa > 40) {
        document.write('Obesidade grau III.')
    }