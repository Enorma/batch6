/*
Joel quiere ver el porcentaje de veces que falto a clases,
el programa recibirá un arreglo de asistencias para poder calcular el resultado,
cada elemento esta representado por un valor booleano
*/

const asistencias = [
	true,
	false,
	true,
	true,
	false,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
	false,
	true,
	true,
	true
];
const asist_value = 1/asistencias.length;
let porcentaje = 0;

for(let i=0; i<asistencias.length; i++) {
	if(asistencias[i]) {
		porcentaje+=asist_value;
	}
}
porcentaje*=100;

console.log("tu porcentaje de asistencias es: "+porcentaje+"%");
