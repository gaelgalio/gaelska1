import { Personagem } from "./personagem.ts";

export class Maguinho extends Personagem {
  constructor(nome: string, forca: number, vida: number, defesa: number) {
    super(nome, forca, vida, defesa);
  }

  public atacar(persona: Personagem): void {
    let dado = this.gerarAtaque();

    if (dado == 0) {
      console.log(
        `${this.nome} lança um cristal de gelo abissal a ${persona.nome}.`,
      );
      persona.sofrerAtaque(this.forca + 10, this.defesa);
    } else if (dado == 1) {
      console.log(`${this.nome} lança uma bola de fogo a ${persona.nome}.`);
      persona.sofrerAtaque (this.forca  + 20, this.defesa);
    } else if (dado == 2) {
      console.log(`${this.nome} torna ${persona.nome} em um pato. ${persona.nome} está inseguro.`);
      persona.sofrerAtaque (this.forca  + 25, this.defesa);
    } else {
      console.log(`${this.nome} convoca uma rocha de magma sorridente em ${persona.nome}.`);
      persona.sofrerAtaque (this.forca  + 30, this.defesa);
    }
  }
}
