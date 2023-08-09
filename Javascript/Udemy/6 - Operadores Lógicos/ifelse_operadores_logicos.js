/*// E (&&) *Verdadeiro se todas expressões forem verdadeiras
//true && true && false = false
if (2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write('Verdadeiro')
}else {
    document.write('Falso')
}

// OU (||) *Verdadeiro se pelo menos uma das expressões forem verdadeiras
//true || true || false = false
if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('Verdadeiro')
}else {
    document.write('Falso')
}

//NEGAÇÃO (!) *Inverte o resultado da expressão de comparação
//true = false
if (!(5 >= 2)) {
    document.write('Verdadeiro')
}else {
    document.write('Falso')
}
*/
var nota1 = Number(prompt('Nota 1: '))
var nota2 = Number(prompt('Nota 2: '))
var faltas = parseInt(prompt('Digite a quantidade de faltas: '))
var media = (nota1 + nota2) / 2
var faltas_maximas = 15
document.write('Primeira nota:  ' +nota1+ '<br> Segunda nota: '+nota2+'<br> Média: '+media+'<br> Faltas Máximas: '+faltas_maximas+' <br> Suas faltas : '+faltas+ '<br>') 
/*if (media >= 7 && faltas <= faltas_maximas) {
    document.write('Você passou de ano!!')
}else {
    document.write('Você não passou de ano.')
}
*/

//OPERADOR TERNÁRIO
var resultado = (media >= 7 && faltas <= faltas_maximas) ? ('Você passou de ano!!') : ('Você não passou de ano.');
document.write(resultado)

