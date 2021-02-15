// module.exports.sayHai = (say) => {
// 	console.log(`Hallo , ${say}. How are you ? `)
// }

exports.sayHai = (hai) =>{
	const readline = require('readline-sync')

	let nama = readline.question("Nama kamu : ? ")

	const jawab = (nama !== "") ? nama : 'Oh ok no problems !'

	console.log(`halo ${jawab}`)


}