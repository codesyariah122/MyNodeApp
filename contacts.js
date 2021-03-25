const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
// const readline = require('readline')

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

const dirPath = './data'
if(!fs.existsSync(dirPath)){
	fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
	fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// const tulisPertanyaan = pertanyaan => {
// 	return new Promise((resolve, reject) => {
// 		rl.question(pertanyaan, (nama) => {
// 			resolve(nama)
// 		})
// 	})
// }

const simpanContact = (nama, email, noHP) => {
	const contact = {nama, email, noHP}
	const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
	const contacts = JSON.parse(fileBuffer)

	// check duplicate
	const duplicate = contacts.find(contact => contact.nama === nama)

	if(duplicate){
		console.log(chalk.red.inverse('Contact already add, please input new contact'))
		return false
	}

	// chek email
	if(email){
		if(!validator.isEmail(email)){
			console.log(
				chalk.red.inverse.bold('Email tidak valid')
			)
			return false
		}
	}

	if(!validator.isMobilePhone(noHP, 'id-ID')){
		console.log(
				chalk.red.inverse.bold('No Hp Tidak valid')
			)
			return false
	}

	contacts.push(contact)

	fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
	console.log(chalk.green.inverse.bold('terima kasih sudah memasukan data'))
	// rl.close()
}

module.exports = {
	// tulisPertanyaan,
	simpanContact
}