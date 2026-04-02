
export class Aluno{
    public idade: number = 0;
    readonly nome: string = "NOME";
    sobrenome: string = "SOBRENOME";
    genero: string = "GÊNERO";
    private nota: number = 0;
    classe: number = 0;
    
    constructor(Idade:number, Nome: string, Sobrenome: string, Genero: string, Nota: number, Classe: number){
this.idade=Idade;
this.nome=Nome;
this.sobrenome=Sobrenome;
this.genero=Genero;
this.nota=Nota;
this.classe=Classe;

    }
    falar (){
        console.log ("Meu nome é " + this.nome + this.sobrenome + ", sou do gênero " + this.genero + " e tenho " + this.idade + " anos.\n Estou no " + this.classe + " ano/classe. Minha nota é " + this.nota + ".\n");
    }
    trocarNota (noota:number){
        if (noota > 10){
        console.log ("ERRO.");
        }

        if (noota < 0){
        console.log ("ERRO.");
        }

        else {
            this.nota=noota;
        }
    }
}
