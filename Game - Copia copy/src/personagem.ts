export abstract class Personagem {
  public nome: string = "";
  public abstract atacar(persona: Personagem): void;
  protected forca: number = 0;
  protected vida: number = 0;
  public vidaMaxima: number = 0;
  protected defesa: number = 0;
  protected imagem: string = "";
  private usouCura: boolean = false;

  constructor(
    _nome: string,
    _forca: number,
    _vida: number,
    _defesa: number,
    _imagem: string,
  ) {
    this.nome = _nome;
    this.forca = _forca;

    this.vida = _vida;
    this.vidaMaxima = _vida;

    this.defesa = _defesa;
    this.imagem = _imagem;
  }

  public log(mensagem: string) {
    document.getElementById("_console")!.innerHTML += "<p>" + mensagem + "</p>";
  }

  isVivo(): boolean {
    return this.vida > 0;
  }

  sofrerAtaque(dano: number, defesa: number): void {
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

  gerarAtaque(): number {
    let maximoAtk = 3;
    return Math.floor(Math.random() * maximoAtk); // 0 ate 3
  }

  regenerarVida() {
    if (this.vida < 80 && !this.usouCura) {
      let regenerar = 100;
      this.vida += regenerar;

      this.log(
        `${this.nome} recebeu ${regenerar} de regeneração, vida atual ${this.vida}.`,
      );
      this.usouCura = true;
    }
  }
}
