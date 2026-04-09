import {gerente} from "./Gerente.ts"
import {funcionario} from "./Funcionario.ts"

let func : funcionario = new funcionario ("Fábio", 2500);
func.falar();


let gere : gerente = new gerente ("Geraldo", 5000);
gere.cargo = "Gerente de Negócio";
gere.falar();
gere.MandarAlgm();

