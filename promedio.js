/*
A Daniel le acaban de mandar una lista con sus calificaciones,
quiere saber si su promedio es suficiente para tener una beca este año,
el promedio mínimo que necesita es 8,
el programa recibirá la cantidad de calificaciones
y un arreglo de calificaciones para poder calcular el resultado.
*/

let promedio = 0;
const grades = [8,5,8,10,9,8,2,6];

for(let i=0; i<grades.length; i++) {
	promedio += grades[i];
}
promedio /= grades.length;

console.log("tu promedio es: "+promedio.toString());
if(promedio>=8) {
	console.log("YA MAMAMOS GOEEEEEY");
}else {
	console.log("TE LA PELAS GOEEEEEY");
}
