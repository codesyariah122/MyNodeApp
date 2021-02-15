const readline = require('readline-sync')

const noBulan = parseInt(readline.question('Masukan nomor bulan : '))

let namaBulan;

if(noBulan == 1){
	namaBulan = 'Januari'
}else if(noBulan === 2){
	namaBulan = 'Februari'
}else if(noBulan === 3){
	namaBulan = 'Maret'
}else if(noBulan === 4){
	namaBulan = 'April'
}else if(noBulan === 5){
	namaBulan = 'Mei'
}else if(noBulan === 6){
	namaBulan = 'Juni'
}else if(noBulan === 7){
	namaBulan = 'Juli'
}else if(noBulan === 8){
	namaBulan = 'Agustus'
}else if(noBulan === 9){
	namaBulan = 'September'
}else if(noBulan === 10){
	namaBulan = 'Oktober'
}else if(noBulan === 11){
	namaBulan = 'November'
}else if(noBulan === 12){
	namaBulan = 'Desember'
}else{
	console.log(`tidak ada bulan ke - ${noBulan}`)
	process.exit(1)
}

console.log(`No Bulan ${noBulan} : ${(namaBulan)}`)