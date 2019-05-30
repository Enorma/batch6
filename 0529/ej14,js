/*
Joel tiene que dar un reconocimiento al alumno con mejor promedio de su clase,
él tiene una lista de alumnos,
cada alumno tiene un nombre y una lista de materias,
cada materia tiene su nombre y su calificación.
Haz un algoritmo que escriba el nombre del alumno que tenga el promedio más alto.
*/

const alumnos = [
	{
		nombre: "pepe",
		materias: [
			{
				nombre: "mates",
				calif: 6
			},
			{
				nombre: "progra",
				calif: 7
			},
			{
				nombre: "redes",
				calif: 9
			},
			{
				nombre: "logica",
				calif: 8
			}
		]
	},
	{
		nombre: "paco",
		materias: [
			{
				nombre: "mates",
				calif: 8
			},
			{
				nombre: "progra",
				calif: 9
			},
			{
				nombre: "redes",
				calif: 9
			},
			{
				nombre: "logica",
				calif: 7
			}
		]
	},
	{
		nombre: "poncho",
		materias: [
			{
				nombre: "mates",
				calif: 4
			},
			{
				nombre: "progra",
				calif: 7
			},
			{
				nombre: "redes",
				calif: 5
			},
			{
				nombre: "logica",
				calif: 8
			}
		]
	}
]

let maxprom = 0;
let maxalumno = -1;

for(let i=0; i<alumnos.length; i++) {
	let thisprom = 0;
	for(let j=0; j<alumnos[i].materias.length; j++) {
		thisprom+=alumnos[i].materias[j].calif;
	}
	thisprom/=alumnos[i].materias.length;
	if(thisprom>maxprom) {
		maxprom = thisprom;
		maxalumno = i;
	}
}

console.log(alumnos[maxalumno].nombre+" tiene el promedio más alto.");
