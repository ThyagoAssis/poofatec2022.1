//Desafio: Desenvovler uma caculcador com dois atributos e os métodos:
//-> soma, subtração, multiplicação e divisão

//Enviar o código no corpo do email para thyagoalmeidaprof@gmail.com
class Calculator{

    //Atribitos
    /* numUm;
    numDois */

    constructor(valorUm, valorDois){
        this.numUm = valorUm;
        this.numDois = valorDois;
        this._resultado = 0;
    }

    //Métodos
    somar(){
        this._resultado = this.numUm + this.numDois
        //console.log("Soma: " + soma);
        return this._resultado;
    }

    subtrair(){
        let subtrair = this.numUm - this.numUm
        console.log("Subtração: " + subtrair)
    }

    multiplicar(){
        let multi =  this.numUm * this.numDois
        console.log("Multiplicação: " + multi);
    }

    dividir(){
        let div = this.numUm / this.numDois
        console.log("Divisão: " + div)
    }
}

//---------------------------------------------
const calculadora = new Calculator(20, 30);
/* calculadora.numUm = 2;
calculadora.numDois = 3;
 */
console.log(calculadora.somar());
/* calculadora.subtrair();
calculadora.dividir();
calculadora.multiplicar(); */

