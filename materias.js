/*
Joel tiene que informar a sus alumnos las materias que reprobaron,
el tiene una lista de alumnos,
cada alumno tiene un nombre y una lista de materias,
cada materia tiene su nombre y su calificación,
el promedio mínimo para aprobar es 6.
Haz un algoritmo que escriba el nombre del alumno y la materia que reprobó.
*/

const alumnos = [
	{
		nombre: "pepe",
		materias: [
			{
				nombre: "español",
				calif: 6
			},
			{
				nombre: "mates",
				calif: 8
			},
			{
				nombre: "física",
				calif: 3
			},
			{
				nombre: "biología",
				calif: 9
			},
		]
	},
	{
		nombre: "toño",
		materias: [
			{
				nombre: "español",
				calif: 5
			},
			{
				nombre: "mates",
				calif: 7
			},
			{
				nombre: "física",
				calif: 9
			},
			{
				nombre: "biología",
				calif: 4
			},
		]
	},
	{
		nombre: "luis",
		materias: [
			{
				nombre: "español",
				calif: 7
			},
			{
				nombre: "mates",
				calif: 9
			},
			{
				nombre: "física",
				calif: 10
			},
			{
				nombre: "biología",
				calif: 5
			},
		]
	},
];

for(let i=0; i<alumnos.length; i++) {
	for(let j=0; j<alumnos[i].materias.length; j++) {
		if(alumnos[i].materias[j].calif<6) {
			console.log(alumnos[i].nombre+" reprobó "+alumnos[i].materias[j].nombre);
		}
	}
}
