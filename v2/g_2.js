//Clase para crea la partida.
class Game {
    gameId = Math.floor(Math.random()*10001);
    isOnSpree = [false, "", 0];
    playersDeath = 0;
    //La cantidad de asesinatos que un jugador hizo durante la partida.
    totalKills (killer){
        console.log(`El jugador ${killer.nickName} Mato a ${killer.killCount} Jugadores`);
    }
    //Los jugadores asesinados por una persona en especifico.
    totalKills_Names (killer){
        console.log(`El jugador ${killer.nickName} Mato a los jugadores: ${killer.killCountNames}`);
    }
    killingSpree (){
        if (this.isOnSpree[0]) {
            if (this.isOnSpree[2] === 2) console.log(this.isOnSpree[1]);
            if (this.isOnSpree[2] === 3) console.log(`${this.isOnSpree[1]} con una TripleKill!`);
            if (this.isOnSpree[2] === 4) console.log(`${this.isOnSpree[1]} con una CuadraKill!`);
            if (this.isOnSpree[2] === 5) console.log(`${this.isOnSpree[1]} con una PentaKill!`);
        } else console.warn("No hay racha de ningun jugador...");
    }
}
//Se crea una nueva partida.
let game_1 = new Game;
//Clase para crear a los jugadores.
class Player { 
    id = Math.floor(Math.random() * 101);
    killCount = 0;
    killCountNames = [];
    //Parametros personalizados para cada jugador.
    constructor (nickName, isAlive, skin){
        this.nickName = nickName;
        this.isAlive = isAlive;
        this.skin = skin;
    }
    spree = 0;
    lastKiller = "";
    //Funcion para que el jugador mate a otros jugadores.
    kill (playerSlain) {
        //Racha de asesnatos.
        if (this.lastKiller === this.nickName) {
            game_1.isOnSpree[0] = true;
            game_1.isOnSpree[1] = `${this.nickName} esta en racha de asesinatos`;
            game_1.isOnSpree[2] = this.spree++;
        } else game_1.isOnSpree[0] = false;
        //Si el jugador que esta intentando matar ya esta muerto.
        if (!this.isAlive) console.log("El jugador que intetas usar ya esta muerto, este no puede matar a nadie"); 
        else {
            const killResume = () => {
                console.log(`${this.nickName} A asesinado a ${playerSlain.nickName}`);
                playerSlain.isAlive = false;
                game_1.playersDeath++;
                this.killCount++;
                this.killCountNames.push(playerSlain.nickName);
            }
            //Si es el primer asesinato de la partiada
            if (game_1.playersDeath === 0) {
                killResume();
                this.lastKiller = this.nickName;
            } else {
                //Revisar si el jugador al que se intenta matar esta aun vivo.
                if (!playerSlain.isAlive) console.log(`Hey ${playerSlain.nickName} Ya fue asesinado, la operacion no se puede completar`);
                else {
                    killResume();
                    this.lastKiller = this.nickName;
                }
            }
        }
    } 
}
//Jugadores del primer equipo, Siendo estos identificados con true.
let player_1 = new Player("Nick 1", true, "Skin default", true);
let player_2 = new Player("Nick 2", true, "Skin del 10 aniversario", true);
let player_3 = new Player("Nick 3", true, "Princesa Estelar", true);
//Jugadores del segundo equipo, Siendo estos identificados con false.
let player_4 = new Player("Nick 4", true, "Skin default", false);
let player_5 = new Player("Nick 5", true, "Skin default", false);
let player_6 = new Player("Nick 6", true, "Master of puppets", false);

//Pueba de juego.
player_1.kill(player_2);
player_1.kill(player_2);
player_1.kill(player_2);
player_1.kill(player_3);
game_1.totalKills(player_1);
game_1.totalKills_Names(player_1);
game_1.killingSpree();
player_1.kill(player_4);
game_1.killingSpree();
player_1.kill(player_5);
game_1.killingSpree();
player_6.kill(player_1);
game_1.killingSpree();