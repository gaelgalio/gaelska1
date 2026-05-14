import { Personagem } from "./personagem.ts";

export class Maguinho extends Personagem {
  constructor(nome: string, forca: number, vida: number, defesa: number) {
    super(
      nome,
      forca,
      vida,
      defesa,
      "C:/Users/Aluno/Desktop/gaelska1/Game - Copia/images/mgooosfnd.png",
    );
  }

  //rolagem de ataques
  public atacar(persona: Personagem): void {
    let dado = this.gerarAtaque();

    if (dado == 0) {
      this.log(
        `${this.nome} lança um cristal de gelo abissal a ${persona.nome}.`,
      );
      persona.sofrerAtaque(this.forca + 10, this.defesa);
    } else if (dado == 1) {
      this.log(`${this.nome} lança uma bola de fogo a ${persona.nome}.`);
      persona.sofrerAtaque(this.forca + 20, this.defesa);
    } else if (dado == 2) {
      this.log(
        `${this.nome} torna ${persona.nome} em um pato. ${persona.nome} está inseguro.`,
      );
      persona.sofrerAtaque(this.forca + 25, this.defesa);
    } else {
      this.log(
        `${this.nome} convoca uma rocha de magma sorridente em ${persona.nome}.`,
      );
      persona.sofrerAtaque(this.forca + 30, this.defesa);
    }
  }
}
