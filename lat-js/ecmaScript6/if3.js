const readline = require('readline-sync')
let a = parseInt(readline.question('Masukan bilangan bulat : '))

if(a > 0){
	console.log(`${a} adalah bilangan positif`)
}else if(a === 0){
	console.log('Anda memasukan nilai 0')
}else{
	console.log(`${a} adalah bilangan negatif`)
}