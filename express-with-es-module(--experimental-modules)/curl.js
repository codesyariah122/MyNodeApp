import shell from 'shelljs'
import readline from 'readline-sync'

let banner = ` 
	Selamat Datang !
	=================================
	Pilih menu dibawah ini : 
		1. Tampilkan semua data user
		2. Tampilkan berdasarkan id user
	=================================
	`
console.log(banner)

let curl = ''
let ask_a = parseInt(readline.question('Pilih menu diatas ? '))
if(!ask_a){
	console.log("Input harus berupa angka")
	console.log(shell.exec('clear', {silent:true}).stdout)
	console.log(shell.exec('node curl.js'))
}

switch(ask_a){
	case 1:
		curl = shell.exec('curl -H GET http://localhost:5000/api/data', {silent:true}).stdout
	break;
		
	case 2:
	let ask_b = parseInt(readline.question('Masukan nomor id user yang ingin ditampilkan ? '))
	if(!ask_b){ 
		console.log('Input hanya angka/number !')
		console.log(ask_b)
	}else{
		curl = shell.exec(`curl -H GET http://localhost:5000/api/data/${ask_b}`, {silent:true}).stdout
	}
	break;

	default:
	console.log("Maaf Pilihan tidak tersedia")
	console.log(shell.exec('clear', {silent:true}).stdout)
}


console.log(curl)
console.log(shell.exec('node curl.js'))
