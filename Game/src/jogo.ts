import { Personagem } from "./personagem.ts";

export class jogo {

    public iniciar (player1:Personagem, player2:Personagem){

        let turno = 1;

        while(player1.isVivo() && player2.isVivo){
            console.log ("\n =============== TURNO" + turno + " ===============");
            player1.atacar(player2);

            if (!player2.isVivo()){
                break;
            }
            player2.atacar(player1);

            turno +=1;
        }

        if(player1.isVivo()){
            console.log (`${player1.nome} ganhou a batalha.`);
        } else {
            console.log (`${player2.nome} ganhou a batalha.`);
        }
    }
}