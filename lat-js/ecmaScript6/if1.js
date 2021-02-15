const readline = require('readline-sync')

let a = parseFloat(readline.question('Masukan nilai a : '))

let b = parseFloat(readline.question('Masukan nilai b : '))

let c;

if(b === 0){
	console.log('Kesalahan: nilai b tidak boleh 0')
}else{
	c = a / b
	console.log(`${a} / ${b} = ${c}`)
}