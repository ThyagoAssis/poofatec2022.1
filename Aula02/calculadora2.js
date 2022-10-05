class Calculadora{
    
    //Atributos Publicos - Pode ser acessados de fora da classe
    num01
    num02

    //Atributos privados não podem ser acessados de forma fora da classe
    //Obs: O javaScript por não ser OO em sua origem não bloqueia o acesso ao atributo privado
    //Porem existe uma boa prática de acessar somente atributos privados dentro da propria classe
    //Atributo privado
    _resultado

   

} //<- ---------------------- Aqui acaba a classe ----------

const calculadoraUm = new Calculadora()
calculadoraUm.num01 = 2;
calculadoraUm.num02 = 4
//calculadoraUm._resultado = 4; //Altera mas não devo