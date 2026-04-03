import {veiculo} from "./exemplostatic.ts"

export class Carro extends veiculo {
    public ano : number = 0;
}

let fusca: Carro = new Carro ("gti", 1999); //modelo, ano
fusca.ano = 2012;
fusca.marca = "gti";
fusca.velocidade = 100;

fusca.acelerar (900);
fusca.exibir ();
