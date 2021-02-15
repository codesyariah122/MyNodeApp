const readline = require('readline-sync')

while(true){
	let username = readline.question('Username : ')
	let password = readline.question('Password : ')
	if(username !== 'Javascript' || password !== 'Node.js'){
		console.log('Username / Password salah\n')
		continue
	}
	console.log('\nSelamat datang, login berhasil')
	break
}