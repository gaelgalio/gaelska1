import { Personagem } from "./personagem.ts";

export class Maguinho extends Personagem {
  constructor(nome: string, forca: number, vida: number, defesa: number) {
    super(nome, forca, vida, defesa, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67ac9192-773b-4a2c-86a5-22816e03bb10/d7ksr69-fd6af9f7-39e8-4a3b-9f96-1c5d6557e875.png/v1/fit/w_828,h_966,q_70,strp/16x16_wizard_sprite_by_obinsun_d7ksr69-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NCIsInBhdGgiOiIvZi82N2FjOTE5Mi03NzNiLTRhMmMtODZhNS0yMjgxNmUwM2JiMTAvZDdrc3I2OS1mZDZhZjlmNy0zOWU4LTRhM2ItOWY5Ni0xYzVkNjU1N2U4NzUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.miW8aNRZq7IBiRwDecM9osSvNYfdViVh-q26VLKwNeU");
  }

  public atacar(persona: Personagem): void {
    let dado = this.gerarAtaque();

    if (dado == 0) {
      this.log(
        `${this.nome} lança um cristal de gelo abissal a ${persona.nome}.`,
      );
      persona.sofrerAtaque(this.forca + 10, this.defesa);
    } else if (dado == 1) {
      this.log(`${this.nome} lança uma bola de fogo a ${persona.nome}.`);
      persona.sofrerAtaque (this.forca  + 20, this.defesa);
    } else if (dado == 2) {
      this.log(`${this.nome} torna ${persona.nome} em um pato. ${persona.nome} está inseguro.`);
      persona.sofrerAtaque (this.forca  + 25, this.defesa);
    } else {
      this.log(`${this.nome} convoca uma rocha de magma sorridente em ${persona.nome}.`);
      persona.sofrerAtaque (this.forca  + 30, this.defesa);
    }
  }
}
