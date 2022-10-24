//Clase base de la partida
class Game{
    //Propiedades del mapa
    constructor (map,teamBlue,teamRed){
        this.history = [];
        this.map = map;
        this.teamBlue = teamBlue;
        this.teamRed = teamRed;
    }
    //Informacion del map
    showInfo (){
        /*
        console.info(this.map);
        console.info(this.teamRed.all());
        console.info(this.teamBlue.all());
        */
        console.log(this.history);
    }
    start (){
        playGame();
    }
}
const playGame = () => {
    console.log(game1.history);
    let isPlaying = true;
    //Clase base de los equipos de la partida
    class Team {
        //Propiedades del equipo.
        constructor (name, players, state){
            this.name = name;
            this.players = players;
            this.state = state;
        }
        //Mostrar si el equipo gano o perdio.
        finalResult (){
            if (isPlaying !== true) 
                return !this.state ? console.log("Derrota.") : console.log("Victoria.");
            else console.log("La partida aun esta en curso, no hay resultado.")
        }
        //Mostar toda la informacio del equipo
        all (){
            console.log(this.name);
            console.log(this.players);
            console.log(this.state);
        }
    }
    class Player extends Game {
        constructor (nickName, playerId, level, skin, state, history){
            super(history);
            this.nickName = nickName;
            this.playerId = playerId;
            this.level = level;
            this.skin = skin;
            this.state = "Estado de vida del jugador: " + state;
        }
        kill(playerSlain) {
            if (this.state) {
                if (this.history.length === 0){
                    console.log(`${this.nickName} a matado al jugador ${playerSlain.nickName} 1`);
                    this.history.push(playerSlain);
                    console.log(this.history)
                    playGame();      
                } else {
                    for (let j = 0; j <= this.history.length; j++){
                        if (playerSlain.id === this.history[j].id) console.log(`El jugador ${this.history[j].id} fue asesinado previamente, no se puede completar la operacion 2`); 
                        else {
                            console.log(`${this.nickName} a matado al jugador ${playerSlain.nickName}`);
                            this.history.push(playerSlain);
                        }
                    }
                }
            } else console.log("Este jugador ya fue asesinado, esta fuera del juego.")
        }
    }
    //JUgadores del primer equipo.
    const playersBlue = [
        new Player("Caps", 54, 285, "Pato de nieve", true),
        new Player("Hillysan", 54, 285, "Pato de nieve", true),
        new Player("342", 54, 285, "Pato de nieve", true),
        new Player("PapaLolero", 54, 285, "Pato de nieve", true),
        new Player("xxxPlayerxxx", 54, 285, "Pato de nieve", true),
    ];
    //Jugadores del segundo equipo.
    const playersRed = [
        new Player("Caps segundo", 54, 285, "Pato de nieve", true),
        new Player("yumbo", 54, 285, "Pato de nieve", true),
        new Player("mfMaster", 54, 285, "Pato de nieve", true),
        new Player("TheDestroyer", 54, 285, "Pato de nieve", true),
        new Player("Jcarlos", 54, 285, "Pato de nieve", true),
    ];

    let team1 = new Team("C9", playersBlue, false);
    let team2 = new Team("FNC", playersRed, false);

    playersBlue[0].kill(playersRed[0]);

    if (game1.history === 10 ) isPlaying = false;
}
const game1 = new Game();
game1.showInfo();
game1.history.push(1);
game1.showInfo();