import {funcionario} from "./Funcionario.ts"

export class gerente extends funcionario {
public cargo : string = " ";

//ferias (){

//}

MandarAlgm (){
    console.log (`Vai lavar a louça ${this.nome}!`);
}

override falar(){
    console.log(`Eu sou ${this.nome}, meu salário é de R$ ${this.salario}.`)
}
}