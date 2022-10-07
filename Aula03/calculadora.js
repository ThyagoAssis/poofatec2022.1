class Calculadora{    
    //O método constructor é nativo da classe - Ele constroi coisas para gente
    constructor(vUm, vDois){
        this.valorUm = vUm;
        this.valorDois = vDois;
        this._resultado;
    }

    //OBS: Todo método deve retornar o resultado de atividade
    soma(){
        this._resultado = parseFloat(this.valorUm) + parseFloat(this.valorDois);
        return this._resultado;
    }
    subtrair(){
        this._resultado = parseFloat(this.valorUm) - parseFloat(this.valorDois);
        return this._resultado;
    }
}
///Instacia da classe - Fora da calsse
const calcular = new Calculadora(10,20);

console.log(calcular.soma());
console.log(calcular.subtrair());
