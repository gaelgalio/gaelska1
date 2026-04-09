import {Aluno} from "./aluno.ts";
import {prof} from "./Professor.ts";
let al: Aluno = new Aluno(16,"Samu ","Mendes","masculino",9,2);
//idade, nome, sobrenome, gênero, nota, classe (sala, ano)

let profe:prof = new prof();
profe.atribuirNota (50, al);
//chama nota inicial

al.falar ();