export class funcionario {
    protected nome : string = " ";
    protected salario : number = 0;

constructor (_nome: string, _salario : number){
this.nome = _nome;
this.AltSalario (_salario);
    }

    BuscarNome (){
        return this.nome;
    }

    AltSalario (_salario : number){
        if (_salario < 2000){
            console.log ("ERRO! NÃO INSIRA UM VALOR MENOR QUE 2000.");
    } 
    
    else {
        this.salario = _salario;
    }
    }

   // abstract ferias (dias:number):string;

    falar (){
    console.log (`Eu sou ${this.nome}, meu salário é de R$ ${this.salario}.`);
}

}

