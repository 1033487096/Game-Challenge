class partida {
    constructor(mapa, equipoAzul, equipoRojo) {
        this.mapa = mapa;
        this.equipoAzul = equipoAzul;
        this.equipoRojo = equipoRojo;
        this.muertes = [0];
        this.muertesAzul = 0;
        this.muertesRojo = 0;
    }

    kill(asesinado, asesino) {
      let Azul = false; 
      
      /*for (let i = 0; i <= this.muertes.length; i++) {
        if (asesinado.nickname != this.muertes[i]) {
          for (let player of this.equipoAzul.jugadores) {
            if (player.id === asesinado.id) {
              Azul = true;
              break;
            }
          }

          if (Azul) this.muertesRojo++;
          
          else this.muertesAzul++;
    
          console.log(asesino.nickname + ' mató a ' + asesinado.nickname)
          this.muertes.push(asesinado.nickname)
          console.log(this.muertes)
        }
        else if (asesinado.nickname === this.muertes[i]){
          console.log('El ' + asesinado.nickname + ' está asesinado. No es posible la operación ')
        break;}  
      }*/
    }
    
    asesinado() {
      
    }



    imprimirMuertes() {
      console.log(`${this.equipoAzul.nombre} ${this.muertesAzul} - ${this.equipoRojo.nombre} ${this.muertesRojo}`)

     }


    killsjugador() {
      console.log("a")
    }

}
module.exports = partida;
