class Game {
    playersDeath = [];
}
let game_1 = new Game;
class Player {
    id = Math.floor(Math.random() * 101);
    constructor (nickName, isAlive){
        this.nickName = nickName;
        this.isAlive = isAlive;
    }
    kill (playerSlain) {
        if (this.isAlive === false) console.log("El jugador que intetas usar ya esta mueto, este no puede matar a nadie"); 
        else {
            let g_1PD = game_1.playersDeath.length;
            if (g_1PD === 0) {
                console.log(this.nickName + " A asesinado a " + playerSlain.nickName);
                playerSlain.isAlive = false;
                game_1.playersDeath.push(playerSlain);
            } else {
                for (let j = 0; j <= g_1PD; j++){
                    if (game_1.playersDeath[j].nickName === playerSlain.nickName) { 
                        console.log("Hey " + playerSlain.nickName + " Ya fue asesinado, la operacion no se puede completar");
                        break;
                    }
                }
            }
        }
    } 
}
let player_1 = new Player("Nick 1", true);
let player_2 = new Player("Nick 2", true);
player_1.kill(player_2);
player_1.kill(player_2);
player_1.kill(player_2);
player_2.kill(player_1);