const stock = [
    {marca: "Huawei",   modelo: "P30",      precio: 13500},
    {marca: "Apple",    modelo: "iPhone X", precio: 20000},
    {marca: "Motorola", modelo: "Moto X",   precio: 10000}
]
let maxprecio = stock[0].precio
let mascaro = -1
for(let i=1; i<stock.length; i++) {
	if(stock[i].precio>maxprecio) {
		maxprecio = stock[i].precio
		mascaro = i
	}
}
console.log("el mas caro es el "+stock[mascaro].marca+" "+stock[mascaro].modelo+" que cuesta "+maxprecio.toString());
