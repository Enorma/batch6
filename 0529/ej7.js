const temperaturas = [19, 24, 25, 30, 10];
let maxima = temperaturas[0];
for(let i=1; i<temperaturas.length; i++) {
	if(temperaturas[i]>maxima) {
		maxima = temperaturas[i];
	}
}
console.log("la maxima es: "+maxima.toString());
