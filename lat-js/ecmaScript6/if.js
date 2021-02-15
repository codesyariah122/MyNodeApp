const readline = require('readline-sync')

let a = parseFloat(readline.question('Masukan nilai a : '))

let b = parseFloat(readline.question('Masukan nilai b : '))

let c;

if(b === 0){
	console.log('Kesalahan: Nilai b tidak boleh nol');
}

c = a / b;

console.log(`${a} / ${b} = ${c}`)