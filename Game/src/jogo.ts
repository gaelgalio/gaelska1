import { Arqueiro } from "./arqueiro.ts";
import { Maguinho } from "./mago.ts";
import { Personagem } from "./personagem.ts";

export class jogo {
  public async iniciar(player1: Personagem, player2: Personagem) {
    let turno = 1;

    this.atualizaInterface(player1, player2);

    while (player1.isVivo() && player2.isVivo) {
      player1.log("\n =============== TURNO" + turno + " ===============");
      player1.atacar(player2);

      if (!player2.isVivo()) {
        break;
      }
      player2.atacar(player1);
      this.atualizaInterface(player1, player2);
      await this.esperaTempo();
      turno += 1;
    }

    if (player1.isVivo()) {
      player1.log(`${player1.nome} ganhou a batalha.`);
    } else {
      player1.log(`${player2.nome} ganhou a batalha.`);
    }
  }

  buscaComponenteHTML(id: string) {
    return document.getElementById(id);
  }

  public atualizaInterface(jogador1: Personagem, jogador2: Personagem) {
    (document.getElementById("imgjogador1") as HTMLImageElement).src =
      jogador1.getImg();
    jogador1.getImg();
    (document.getElementById("imgjogador2") as HTMLImageElement).src =
      jogador2.getImg();
    jogador2.getImg();

    this.buscaComponenteHTML("saude1")!.textContent = "HP: " + jogador1.getVida();
    this.buscaComponenteHTML("saude2")!.textContent = "HP: " + jogador2.getVida();

    this.buscaComponenteHTML("nome1")!.textContent = jogador1.nome;
    this.buscaComponenteHTML("nome2")!.textContent = jogador2.nome;
  }

  public esperaTempo() {
    //const milissegundos = 800;
    return new Promise((x) => setTimeout(x, 800));
  }
}

function construirJogo() {
  let _mago: Maguinho = new Maguinho("Mago", 50, 200, 60);
  let _arqueiro: Arqueiro = new Arqueiro("Arqueiro", 50, 190, 50);

  let _jogo: jogo = new jogo();
  _jogo.iniciar(_mago, _arqueiro);
}

document.getElementById("botaoJogar")!. addEventListener("click",construirJogo);
