const readline = require('readline-sync')

let a =parseInt(readline.question('Masukan bilangan bulat : '))

if(a % 2 === 0){
	console.log(`${a} adalah bilangan bulat`)
}else{
	console.log(`${a} adalah bilangan ganjil`)
}