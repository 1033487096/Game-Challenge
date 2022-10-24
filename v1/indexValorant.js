const mapa = require("./Valorant/Mapa");
const equipo = require("./Valorant/Equipo");
const jugador = require("./Valorant/jugador");
const partida = require("./Valorant/partida");
const muertes = require("./Valorant/muertes");

const jugador1 = new jugador(1, "jugador1", 20, "A");
const jugador2 = new jugador(2, "jugador2", 30, "B");
const jugador3 = new jugador(3, "jugador3", 25, "C");
const jugador4 = new jugador(4, "jugador4", 23, "D");
const jugador5 = new jugador(5, "jugador5", 20, "E");
const jugador6 = new jugador(6, "jugador6", 23, "F");
const jugador7 = new jugador(7, "jugador7", 12, "G");
const jugador8 = new jugador(8, "jugador8", 18, "H");
const jugador9 = new jugador(9, "jugador9", 40, "I");
const jugador10 = new jugador(10, "jugador10", 32, "J");

const team1 = [jugador1, jugador2, jugador3, jugador4, jugador5];
const team2 = [jugador6, jugador7, jugador8, jugador9, jugador10];

const C9 = new equipo("C9", team1);
const FNC = new equipo("FNC", team2);
    
const split = new mapa("SPLIT", [C9], 10);

const ranked = new partida(split, C9, FNC);

ranked.kill(jugador3, jugador6);
ranked.kill(jugador3, jugador6);

/*ranked.kill(jugador3, jugador6);
ranked.imprimirMuertes();
ranked.kill(jugador2, jugador8)
ranked.imprimirMuertes();
ranked.kill(jugador8, jugador1)
ranked.imprimirMuertes();
ranked.kill(jugador7, jugador3)
ranked.imprimirMuertes();
ranked.kill(jugador9, jugador5)
ranked.imprimirMuertes();
ranked.kill(jugador1, jugador10)
ranked.imprimirMuertes();*/
