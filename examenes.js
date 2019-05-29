/*
Paco no estudió mucho para sus últimos exámenes,
quiere saber cuántos exámenes tendrá que realizar de nuevo,
el programa recibirá un arreglo de calificaciones para poder calcular el resultado
*/

const exams = [8,5,8,10,9,8,2,6];
for(let i=0; i<exams.length; i++) {
	if(exams[i]<6) {
		console.log("tronaste el examen #"+i.toString()+" con "+exams[i]);
	}
};
