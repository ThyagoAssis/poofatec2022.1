class MediaAluno{
    constructor(n1,n2,n3,n4){
        this.nota1 = n1;
        this.nota2 = n2; 
        this.nota3 = n3;
        this.nota4 = n4;
        this._resultado;
    }

    media(){
        this._resultado = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
        //If e Else ternario
        return this._resultado > 5 ? "Aluno Aprovado" : "Aluno Reprovado";
       
       
        /* if(this._resultado >= 5){
            let msg = "Aprovado";
            return msg
        }else{
            let msg = "Reprovado";
            return msg;
        }                 */
    }
}

const thyago = new MediaAluno(10,10,10,10);
console.log(thyago.media());

