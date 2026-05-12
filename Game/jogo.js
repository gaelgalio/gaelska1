"use strict";
(() => {
  // src/personagem.ts
  var Personagem = class {
    constructor(_nome, _forca, _vida, _defesa, _imagem) {
      this.nome = "";
      this.forca = 0;
      this.vida = 0;
      this.vidaMaxima = 0;
      this.defesa = 0;
      this.imagem = "";
      this.usouCura = false;
      this.nome = _nome;
      this.forca = _forca;
      this.vida = _vida;
      this.vidaMaxima = _vida;
      this.defesa = _defesa;
      this.imagem = _imagem;
    }
    log(mensagem) {
      document.getElementById("_console").innerHTML += "<p>" + mensagem + "</p>";
    }
    isVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano, defesa) {
      let danoReal = dano;
      danoReal = danoReal - defesa * 0.1;
      this.vida = this.vida - danoReal;
      this.regenerarVida();
      this.log(`${this.nome} recebeu ${dano} de dano, vida atual ${this.vida}.`);
    }
    getVida() {
      return this.vida;
    }
    getImg() {
      return this.imagem;
    }
    gerarAtaque() {
      let maximoAtk = 3;
      return Math.floor(Math.random() * maximoAtk);
    }
    regenerarVida() {
      if (this.vida < 80 && !this.usouCura) {
        let regenerar = 100;
        this.vida += regenerar;
        this.log(
          `${this.nome} recebeu ${regenerar} de regenera\xE7\xE3o, vida atual ${this.vida}.`
        );
        this.usouCura = true;
      }
    }
  };

  // src/arqueiro.ts
  var Arqueiro = class extends Personagem {
    constructor(nome, forca, vida, defesa) {
      super(
        nome,
        forca,
        vida,
        defesa,
        "C:/Users/Aluno/Desktop/gaelska1/Game/images/arqueiroimagemp-removebg-preview.png"
      );
    }
    //rolagem de ataques
    atacar(persona) {
      let dado = this.gerarAtaque();
      if (dado == 0) {
        this.log(
          `${this.nome} atira tr\xEAs flechas flamejantes a ${persona.nome}.`
        );
        persona.sofrerAtaque(this.forca + 10, this.defesa);
      } else if (dado == 1) {
        this.log(`${persona.nome} pisou em uma armadilha.`);
        persona.sofrerAtaque(this.forca + 20, this.defesa);
      } else if (dado == 2) {
        this.log(`${this.nome} lan\xE7a explosivos laminosos a ${persona.nome}.`);
        persona.sofrerAtaque(this.forca + 25, this.defesa);
      } else {
        this.log(`${this.nome} menciona a calv\xEDcie de ${persona.nome}.`);
        persona.sofrerAtaque(this.forca + 30, this.defesa);
      }
    }
  };

  // src/mago.ts
  var Maguinho = class extends Personagem {
    constructor(nome, forca, vida, defesa) {
      super(
        nome,
        forca,
        vida,
        defesa,
        "C:/Users/Aluno/Desktop/gaelska1/Game/images/mgooosfnd.png"
      );
    }
    //rolagem de ataques
    atacar(persona) {
      let dado = this.gerarAtaque();
      if (dado == 0) {
        this.log(
          `${this.nome} lan\xE7a um cristal de gelo abissal a ${persona.nome}.`
        );
        persona.sofrerAtaque(this.forca + 10, this.defesa);
      } else if (dado == 1) {
        this.log(`${this.nome} lan\xE7a uma bola de fogo a ${persona.nome}.`);
        persona.sofrerAtaque(this.forca + 20, this.defesa);
      } else if (dado == 2) {
        this.log(
          `${this.nome} torna ${persona.nome} em um pato. ${persona.nome} est\xE1 inseguro.`
        );
        persona.sofrerAtaque(this.forca + 25, this.defesa);
      } else {
        this.log(
          `${this.nome} convoca uma rocha de magma sorridente em ${persona.nome}.`
        );
        persona.sofrerAtaque(this.forca + 30, this.defesa);
      }
    }
  };

  // src/jogo.ts
  var jogo = class {
    async iniciar(player1, player2) {
      let turno = 1;
      this.atualizaInterface(player1, player2);
      while (player1.isVivo() && player2.isVivo) {
        player1.log("\n =============== TURNO" + turno + " ===============");
        player2.atacar(player1);
        this.addTomoUAtk("imgjogador1", true);
        await this.esperaTempo();
        this.addTomoUAtk("imgjogador1", false);
        player1.atacar(player2);
        this.addTomoUAtk("imgjogador2", true);
        await this.esperaTempo();
        this.addTomoUAtk("imgjogador2", false);
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
    buscaComponenteHTML(id) {
      return document.getElementById(id);
    }
    /*config. animação quando recebe dano*/
    addTomoUAtk(id, adicionar) {
      if (adicionar) {
        document.getElementById(id).className = "tomou-dano";
      } else {
        document.getElementById(id).className = "";
      }
    }
    atualizaInterface(jogador1, jogador2) {
      document.getElementById("imgjogador1").src = jogador1.getImg();
      document.getElementById("imgjogador2").src = jogador2.getImg();
      this.buscaComponenteHTML("saude1").textContent = "HP: " + jogador1.getVida();
      this.buscaComponenteHTML("saude2").textContent = "HP: " + jogador2.getVida();
      this.buscaComponenteHTML("VidaPlayer2Porcentagem").style.width = jogador2.getVida() * 100 / jogador2.vidaMaxima + "%";
      this.buscaComponenteHTML("VidaPlayer1Porcentagem").style.width = jogador1.getVida() * 100 / jogador1.vidaMaxima + "%";
      this.buscaComponenteHTML("nome1").textContent = jogador1.nome;
      this.buscaComponenteHTML("nome2").textContent = jogador2.nome;
    }
    esperaTempo() {
      return new Promise((x) => setTimeout(x, 800));
    }
  };
  function construirJogo() {
    let _mago = new Maguinho("Maguinho Fofinho", 50, 200, 60);
    let _arqueiro = new Arqueiro("Arqueiro Querido", 50, 190, 50);
    let _jogo = new jogo();
    _jogo.iniciar(_mago, _arqueiro);
  }
  document.getElementById("botaoJogar").addEventListener("click", construirJogo);
})();
