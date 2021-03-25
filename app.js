const yargs = require('yargs')
const contacts = require('./contacts')

yargs.command({
	command: 'add',
	describe: 'Menambahkan contact baru',
	builder: {
		nama: {
			describe: "Nama lengkap",
			demandOption: true,
			type: 'String'
		},
		email: {
			describe: 'Email',
			demandOption: false,
			type: 'String'
		},
		noHP: {
			describe: 'No HP',
			demandOption: true,
			type: 'String'
		}
	},

	handler(argv){
		contacts.simpanContact(argv.nama, argv.email, argv.noHP)
	}
})

yargs.parse()
// const {tulisPertanyaan, simpanContact} = require('./contacts')

// const main = async () => {
// 	const nama = await tulisPertanyaan('Masukan nama anda : ')
// 	const email = await tulisPertanyaan('Masukan email anda : ')
// 	const noHP = await tulisPertanyaan('Masukan no Hp anda : ')

// 	simpanContact(nama, email, noHP)
// }

// main()