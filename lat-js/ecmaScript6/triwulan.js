const readline = require('readline-sync')

let noBulan = parseInt(readline.question('Masukan No Bulan : '))

switch(noBulan){
	case 1:
	case 2:
	case 3: console.log('Triwulan I'); break;
	case 4:
	case 5:
	case 6: console.log('Triwulan II'); break;
	case 7:
	case 9: console.log('Triwulan III'); break;
	case 10:
	case 11: 
	case 12: console.log('Triwulan IV'); break;
	default:
	console.log(`Tidak ada bulan ke - ${noBulan}`)
}
