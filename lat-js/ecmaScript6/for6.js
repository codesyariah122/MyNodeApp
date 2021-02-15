// for(let i=0; i<10; i++){
// 	if(i === 4) break;
// 	process.stdout.write(i + ' '+'\n')
// }
const readline = require('readline-sync')
const data = [30, 50, 70, 90, 20, 80]

let a = parseInt(readline.question('Masuan nilai yang dicari : ? '))

let index = -1

for(let i in data){
	if(data[i] === a){
		index = i
		break
	}
}

if(index > -1){
	console.log(`${a} ditemukan pada index ke - ${index}`)
}else {
	console.log(`${a} tidak ditemukan`)
}