const jugador = {
    nombre: "John Doe",
    partidas: [true, false, true, true]
};
let wins = 0;
for(let i=0; i<jugador.partidas.length; i++) {
	if(jugador.partidas[i]) {
		wins++;
	}
}
console.log(wins.toString()+" victorias");
