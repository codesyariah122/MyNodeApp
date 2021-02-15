let readline = require('readline-sync')

console.log("Tebak nama buah isi dari array berikut [] : ?");
let a = readline.question('Masukan sebuah string dari buah : ')

// let buah = ['Jeruk', 'Mangga', 'Apel', 'Manggis', 'Pepaya', 'Pisang'];

let buah = {'jeruk':'Orange', 'mangga':'Manggo', 'apel':'Apel', 'manggis':'Manggis', 'pepaya':'Papaya', 'pisang':'Banana'}

a = a.charAt(0).toUpperCase() + a.slice(1);

switch(a){
	case "Jeruk":
		// a = parseInt(0);
		a = 'jeruk';
	break;

	case "Mangga":
		// a = parseInt(1);
		a = 'mangga';
	break;

	case "Apel":
		// a = parseInt(2);
		a = 'apel';
	break;

	case "Manggis":
		// a = parseInt(3);
		a = 'manggis';
	break

	case "Pepaya":
		// a = parseInt(4);
		a = 'pepaya';
	break;

	case "Pisang":
		// a = parseInt(5);
		a = 'pisang';
	break;

	default:
		a = "Tidak tersedia";
}

if(a in buah){
	console.log(buah);
	console.log(a);
	console.log(`${a in buah}  => BETUL`);
}else {
	console.log(buah);
	console.log(a);
	console.log(`${a in buah} => SALAH`);
}