///Instacia da classe - Fora da calsse
const calcular = new Calculadora(prompt("Informe valor"), prompt("Informe valor2"));

document.write("Soma: " + calcular.soma() + "<br>");
document.write("Subtrair: " + calcular.subtrair());