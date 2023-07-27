var a = 10;

var b = 20;

var c = null; //variável auxiliar utilizada na lógica

document.write('<h1>Valores A= ' +a+ ' B= ' +b+ ' C= ' +c+ '</h1>');
//lógica de inversão dos valores das variáveis A e B

c = a //utilizada a variável C para armazenar temporariamente o valor da variável A

a = b //sobrepõe o valor da variável A com o valor da variável B

b = c //sobrepóe o valor da variável B com o valor da variável C (C nesse momento contém o valor da variável A)

c = null //opcional: remove o valor contido na variável C

document.write('<h1>Valores A= '+a+' B= '+b+' C= '+c+'</h1>')