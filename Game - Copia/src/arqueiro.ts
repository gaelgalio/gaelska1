import { Personagem } from "./personagem.ts";
export class Arqueiro extends Personagem {
  constructor(nome: string, forca: number, vida: number, defesa: number) {
    super(
      nome,
      forca,
      vida,
      defesa,
      "C:/Users/Aluno/Desktop/gaelska1/Game - Copia/images/arqueiroimagemp-removebg-preview.png",
    );
  }

  //rolagem de ataques
  public atacar(persona: Personagem): void {
    let dado = this.gerarAtaque();

    if (dado == 0) {
      this.log(
        `${this.nome} atira três flechas flamejantes a ${persona.nome}.`,
      );
      persona.sofrerAtaque(this.forca + 10, this.defesa);
    } else if (dado == 1) {
      this.log(`${persona.nome} pisou em uma armadilha.`);
      persona.sofrerAtaque(this.forca + 20, this.defesa);
    } else if (dado == 2) {
      this.log(`${this.nome} lança explosivos laminosos a ${persona.nome}.`);
      persona.sofrerAtaque(this.forca + 25, this.defesa);
    } else {
      this.log(`${this.nome} menciona a calvície de ${persona.nome}.`);
      persona.sofrerAtaque(this.forca + 30, this.defesa);
    }
  }
}
