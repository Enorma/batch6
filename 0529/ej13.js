/*
Joel tiene que mostrar los datos de su alumno más grande de edad,
el tiene una lista de alumnos,
cada alumno tiene un nombre y un número con su edad.
Haz un algoritmo que escriba el nombre del alumno con mayor edad.
*/

const alumnos = [
	{
		nombre: "pepe",
		edad: 18
	},
	{
		nombre: "toño",
		edad: 36
	},
	{
		nombre: "luis",
		edad: 9
	},
	{
		nombre: "paco",
		edad: 56
	}
]

let maxedad = alumnos[0].edad
let masviejo = -1

for(let i=1; i<alumnos.length; i++) {
	if(alumnos[i].edad>maxedad) {
		maxedad = alumnos[i].edad;
		masviejo = i
	}
}

console.log("el mas viejo es: "+alumnos[masviejo].nombre);
