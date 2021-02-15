let barang = [
	['PR01', 'Pensil', 6500],
	['PR02', 'Spidol', 9000],
	['PR03', 'Tinta', 20000],
	['PR04', 'Crayon', 13000]
]

for(let i=0; i<barang.length; i++){
	for(let j=0; j<barang[i].length; j++){
		process.stdout.write(barang[i][j].toString())
		if(j < barang[i].length-1){
			process.stdout.write('\t')
		}
	}
	console.log()
}