import {Personagem} from "./personagem.ts";

export class Arqueiro extends Personagem {

    constructor (nome:string, forca:number, vida: number, defesa: number){
        super (nome, forca, vida, defesa);
    }

    public atacar (persona:Personagem):void {
        console.log (`${this.nome} atira três flechas ferventes a ${persona.nome}.`)
        persona.sofrerAtaque(this.forca, this.defesa);
    }

}