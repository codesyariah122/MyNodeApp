let a = 10, b = 20;
console.log(`a \t: ${a}`);
console.log(`b \t: ${b}`);
console.log(`a == b \t: ${a == b}`);
console.log(`a != b \t: ${a != b}`);
console.log(`a < b \t: ${a < b}`);
console.log(`a > b \t: ${a > b}`);
console.log(`a <= b \t: ${a <= b}`);
console.log(`a >= b \t: ${a >= b}`);

// operator relasional dalam blok validasi(pemilihan)
if(a < b){
	console.log(`a lebih kecil dari b`);
}

// pakai ternari 
let c = (a < b) ? 'a lebih kecil dari b' : ''; 
console.log(c);

let i = a;

while(a <= b){
	process.stdout.write(`${i} \n`)
	i += 2
	// atau
	// i++
}