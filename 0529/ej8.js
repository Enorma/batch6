const alumno = {
    nombre: "John Doe",
	calificaciones: [7, 10, 9, 6]
};
let maxima = alumno.calificaciones[0];
for(let i=1; i<alumno.calificaciones.length; i++) {
	if(alumno.calificaciones[i]>maxima) {
		maxima = alumno.calificaciones[i];
	}
}
console.log("la maxima es: "+maxima.toString());
