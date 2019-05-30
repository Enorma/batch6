/*
Joel tiene que informar a sus alumnos quienes tienen que repetir curso,
el tiene una lista de alumnos,
cada alumno tiene un nombre y una lista de calificaciones
que se tienen que promediar para saber si el alumno está aprobado,
el promedio mínimo para aprobar es 6.
Haz un algoritmo que escriba el nombre de los alumnos que no aprobaron.
*/

const alumnos = [
	{
		nombre: "Pepe",
		grades: [5,2,6,4,8,9]
	},
	{
		nombre: "Toño",
		grades: [9,7,5,7,8,5]
	},
	{
		nombre: "Hugo",
		grades: [4,6,9,4,0,6]
	},
	{
		nombre: "Paco",
		grades: [8,5,8,8,6,5]
	},
	{
		nombre: "Luis",
		grades: [6,9,8,7,9,10]
	}
];

function getAvg(gradelist) {
	let average = 0;
	for(let i=0; i<gradelist.length; i++) {
		average+=gradelist[i];
	}
	return average/gradelist.length;
}

console.log("alumnos reprobados:")
for(let i=0; i<alumnos.length; i++) {
	if(getAvg(alumnos[i].grades)<6) {
		console.log(alumnos[i].nombre);
	}
}
