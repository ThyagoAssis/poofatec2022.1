
//Molde (Class)
class Cliente{
    //Atributos são variáveis metidas
    nome;
    sobreNome;
    idade;
}

//Instanciar - É como se eu pegasse a classe para usá-la
const pessoa1 = new cliente();
pessoa1.nome = "Marcos";
pessoa1.sobreNome = "Silva da Rocha";
pessoa1.idade = "20";

console.log(pessoa1.nome);

const pessoa2 = new cliente();
pessoa2.nome = "Robson";
pessoa2.sobreNome = "Arantes";
pessoa2.idade = "66";

console.log(pessoa2);