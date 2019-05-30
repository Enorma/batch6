const stores = [
	{
		name: "Amazon",
		stock: [
			{marca: "Huawei",   modelo: "P30",      precio: 11999},
			{marca: "Apple",    modelo: "iPhone x", precio: 18000},
			{marca: "Motorola", modelo: "Moto X",   precio: 9000}
		]
	},
	{
		name: "Liverpool",
		stock: [
			{marca: "Huawei",   modelo: "P30",      precio: 13500},
			{marca: "Apple",    modelo: "iPhone x", precio: 20000},
			{marca: "Motorola", modelo: "Moto X",   precio: 10000}
		]
	}
]
let minprecio = 9999999999999;
let masbara_tienda = -1;
let masbara = -1;
for(let i=0; i<stores.length; i++) {
	for(let j=0; j<stores[i].stock.length; j++) {
		if(stores[i].stock[j].precio<minprecio) {
			minprecio = stores[i].stock[j].precio
			masbara_tienda = i
			masbara = j
		}
	}
}
console.log("el más barato es el "+stores[masbara_tienda].stock[masbara].marca+" "+stores[masbara_tienda].stock[masbara].modelo+" que cuesta "+stores[masbara_tienda].stock[masbara].precio.toString()+" pesos en "+stores[masbara_tienda].name);
