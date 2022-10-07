///Métodos get e set
//Os métodos get e set servem para manipular atributos privados
//Desafio usar o metodo construtor -  O atributo privado não pode estar dentro do construtor
class Alunos{
    _cpf;

    constructor(nomeAluno, sobreNomeAluno, alunoCpf){
        this.nome = nomeAluno;
        this.sobrenome = sobreNomeAluno;
        this.cpfAluno = alunoCpf;
    }

    //Método Get pegar
    get cpfAluno(){
        return this._cpf;
    }
    set cpfAluno(valor){
        this._cpf = valor;
    }
}

const aluno1 = new Alunos("Marcos","Silva Arantes","1223546545");
console.log(aluno1.cpfAluno);
console.log(aluno1);