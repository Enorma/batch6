/*
Joel tiene que pagar impuestos,
él tiene una lista de ingresos y gastos,
cada ingreso está representado en número y significan pesos,
cada gasto tiene un concepto (texto) y el total del gasto en pesos.
Los impuestos que debe pagar son el 16% de sus ingresos
menos el total de sus gastos que estén bajo el concepto de: “salud”
*/

const cuentasJoel = {
	ingresos: [300, 600, 200, 400, 500, 700], //2700
	gastos: [
		{
			concepto: "tele",
			total: 9000
		},
		{
			concepto: "salud",
			total: 100
		},
		{
			concepto: "monas chinas",
			total: 987000
		},
		{
			concepto: "pokemones",
			total: 3456000
		},
		{
			concepto: "salud",
			total: 200
		}
	]
}

let sumaingresos = 0
let impneto = 0 //432
let gastosalud = 0

for(let i=0; i<cuentasJoel.ingresos.length; i++) {
	sumaingresos+=cuentasJoel.ingresos[i];
}

for(let i=0; i<cuentasJoel.gastos.length; i++) {
	if(cuentasJoel.gastos[i].concepto==="salud") {
		gastosalud+=cuentasJoel.gastos[i].total;
	}
}

impneto = sumaingresos*0.16-gastosalud;

console.log("joel debe pagar "+impneto+" pesos");
