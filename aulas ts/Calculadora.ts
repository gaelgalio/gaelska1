//ctrl f = find callings
//class objeto
export class calculadora {

    resultado = 0;

    exibirResultado(){

    }

  //adição (a+b)
  somar(a: number, b: number) {
     this.resultado =  a + b;
  }

  //subtração (a-b)
  subtrair(a: number, b: number) {
    this.resultado = a - b;
  }

  //multiplicação (a x b)
  multiplicar(a: number, b: number) {
    this.resultado = a * b;
  }

  //divisão (a/b)
  dividir(a: number, b: number) {
    this.resultado = a / b;
  }
}
