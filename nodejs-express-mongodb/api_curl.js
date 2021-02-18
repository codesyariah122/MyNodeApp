import readline from 'readline-sync'
import shell from 'shelljs'

const banner = `
	=====================
	Daftar User
	=====================
	1. Alluser Data
	2. User By Id
	3. Create User
	4. Update User
	5. Delete User
`

console.log(banner)

let curl=''
const ask_a = parseInt(readline.question('Lihat daftar user sesuai menu diatas : ? '))

if(!ask_a) {
	console.log(shell.exec('clear', {silent:true}).stdout)
	console.log("Input harus berupa angka / number")
	console.log(shell.exec('node api_curl.js'))
}

switch(ask_a){
	case 1:
		curl = shell.exec('curl -X GET http://localhost:5000/api/users', {silent: true}).stdout
	break;

	case 2:
		let ask_b = parseInt(readline.question('Masukan id user yang ingin di tampilkan'))
		if(!ask_b){
			console.log("Input hanya berupa angka/number")
		}else{
			curl = shell.exec(`curl -X Get http://localhost/api/users/${ask_b}`, {silent: true}).stdout
		}
	break;

	case 3:
		let fullname = String(readline.question('Nama : (Nama lengkap anda ? )'))
		let email = String(readline.question('Email : (Alamat email anda)'))
		const data = {"email":email, "fullname":fullname}
		curl = shell.exec(`curl -d "fullname=${fullname}&email=${email}" -X POST http://localhost:5000/api/users/create
			`, {silent: true}).stdout
	break;

	case 4:
		const allUserUpdate = shell.exec('curl -X GET http://localhost:5000/api/users', {silent: false}).stdout
		console.log(allUserUpdate)
		console.log("Pilih id user yang akan di update")
		const idUserUpdate = String(readline.question("Masukan id user : ? "))
		if(idUserUpdate){
			let fullname = String(readline.question("Name ?"))
			let email = String(readline.question("Email ?"))
			curl = shell.exec(`curl -d "email=${email}&fullname=${fullname}" -X PUT http://localhost:5000/api/users/updated/${idUserUpdate}`, {silent: true}).stdout
		}
	break;

	case 5:
		const allUserDelete = shell.exec('curl -X GET http://localhost:5000/api/users', {silent: false}).stdout
		console.log(allUserDelete)
		console.log("Pilih id user yang akan di delete")
		const idUserDelete = String(readline.question("Masukan id user : ? "))
		if(idUserDelete){
			curl = shell.exec(`curl -X DELETE http://localhost:5000/api/users/deleted/${idUserDelete}`, {silent: false}).stdout
		}
	break;

	default:
		console.log("Maaf pilihan tidak tersedia")
}

console.log(curl)
