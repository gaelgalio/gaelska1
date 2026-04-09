import { Maguinho } from "./mago.ts";
import { Arqueiro } from "./arqueiro.ts";
import { jogo } from "./jogo.ts";

let _mago:Maguinho = new Maguinho ("Mago",120,200, 60);
let _arqueiro:Arqueiro = new Arqueiro ("Arqueiro", 140, 190, 50);

let _jogo:jogo = new jogo ();
_jogo.iniciar (_mago, _arqueiro);