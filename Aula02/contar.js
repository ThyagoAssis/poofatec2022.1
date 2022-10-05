//Criar uma classe que conte ate um determinado valor informado

//Contar é uma classe que conta
class Contar{
    //Atributo da classe(Caracteristicas)
    //Escopo global
    valor
    
    //Método é uma ação
    //Para usar um atributo global dentro do método precisa do this
    //ex: this.valor
    contador(){
        for(let i = 0; i <= this.valor; i++){
            console.log(i);
        }
    }

}
//Uso o molde (classe)
const queroContar = new Contar();
//Informo ate onde contar
queroContar.valor = 20;
//Mando ele contar
queroContar.contador();




