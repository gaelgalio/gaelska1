class Contador {

    static total : number = 0;
    public nome : string = " ";


constructor (Nome: string) {
    this.nome = Nome;
    Contador.total++;
    }

static resetar (): void {
    Contador.total = 0;
    }

}

 export class veiculo {
    public marca : string = " ";
    public velocidade : number = 0;

    constructor (_marca : string, _velocidade : number) {
        this.marca = _marca;
        this. velocidade = _velocidade;
    }

    acelerar (_velocidade : number){
        this.velocidade = _velocidade;
    }

    exibir (){
        console.log ("marca" + this.marca + " " + this.velocidade + "km/h");

    }
}