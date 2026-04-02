export class pessoa {

    idade: number = 0;
    nome: string = "NOME";
    altura: number = 0;
    naturalidade: string = "NATURALIDADE";
    aniversario: number = 0;
    //adelaideparade: string = "Oh, we're going to the pasture to meet Adelaide...";
    genero: string = "GÊNERO";
    peso: string = "KILOS"
    cor: string = "COR";
    temperamento: string = "TEMPERAMENTO";

    apresentar () {
        console.log (`Oi! Meu nome é ${this.nome}! \n Tenho ${this.idade} anos de idade e sou de ${this.naturalidade}! \n`);
    }


    triagem () {
        console.log (`Meu gênero é ${this.genero}, sou ${this.cor}. Tenho ${this.peso} e ${this.altura} cm de altura. Eu nasci em ${this.aniversario}.`);
    }

    //cantar () {
        //console.log (`${this.adelaideparade} \n`);
    //}
    sentir () {
        console.log (`Estou ${this.temperamento}. \n`);
    }

     constructor(Idade:number, Nome: string, Altura: number, Naturalidade: string, Aniversario: number, Genero: string, Peso: string, Cor: string, Temperamento: string){
this.idade=Idade;
this.nome=Nome;
this.altura=Altura;
this.naturalidade=Naturalidade;
this.aniversario=Aniversario;
this.genero=Genero;
this.peso=Peso;
this.cor=Cor;
this.temperamento=Temperamento;

 }
}
