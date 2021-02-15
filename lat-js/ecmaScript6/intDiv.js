function intDiv(a, b){
	let c = a / b;
	// with if else statement

	// if(c >= 0){
	// 	return Math.floor(c);
	// }else{
	// 	return Math.ceil(c);
	// }
	
	// with ternary
	return (c >= 0) ? Math.floor(c) : MathCeil(c);
}

let readline = require('readline-sync');

let a = parseInt(readline.question('Masukan nila a : '))
let b = parseInt(readline.question('Masukan nilai b : '))

console.log(`${a} / ${b} = ${intDiv(a, b)}`);