var nota1 = Number(prompt('Nota 1: '))
var nota2 = Number(prompt('Nota 2: '))
var media = (nota1 + nota2) / 2
document.write('Primeira nota: ' +nota1+ ' Segunda nota: '+nota2+' Média: '+media+'<br>') 
if (media >= 7) {
    document.write('Você passou de ano!!')
}else {
    document.write('Você não passou de ano.')
}
