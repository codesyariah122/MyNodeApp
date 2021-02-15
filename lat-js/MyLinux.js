#!/usr/local/bin/node
#!/usr/bin/node
module.exports = {MyDistro}

function MyDistro(eventA, eventB) {
	let readline = require('readline-sync')
	let shell_exec = require('shell_exec').shell_exec
	const { exec } = require("child_process");

	console.log(` 
	Selamat Datang !
	=================================
	Pilih service dibawah ini : 
		1. Check Connection (Masukan ip/domain yang akan dicheck)
		2. Update System
		3. Distro Release
		4. Trafik ip (Interactive monitoring network lan)
		5. Scan Port (Masukan ip/domain yang akan dicheck)
	=================================
	`)

	let a = readline.question(eventA);
	switch(a){
		case "1":
			let b = readline.question(eventB);

			if(b){
				console.log("sedang menghubungkan ke server ... ~");
				let service = shell_exec(`ping -c 3 ${b}`);
				console.log(service);
			}
		break;

		case "2":
			console.log("Terhubgung ke server ... ");
			console.log("update sedang di mulai ... ");
			console.log(shell_exec(`apt update && apt list --upgradable`));
			console.log("update selesai");
		break;

		case "3":
			let os = shell_exec('lsb_release -a')
			console.log("View Release : ")
			console.log(os);
		break;

		case "4":
			console.log(shell_exec('apt update && apt install iptraf'));
			console.log(shell_exec('iptraf-ng'));
		break;

		case "5":
			let c = readline.question(eventB);
			if(c){
				console.log(`mencari server ${c}`);
				console.log(shell_exec(`nmap -sP ${c}`));
			}else{
				console.log("silahkan ulangi kembali:");
			}
		break;

		default:
		console.log("Mohon maaf service belum tersedia");
		break;
	}
}
