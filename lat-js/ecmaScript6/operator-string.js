// let namaDepan = "Puji";
// let namaBelakang = "Ermanto";

// let namaLengkap = namaDepan +' '+namaBelakang;

// console.log(namaLengkap);


// penggabungan string
let data = ['Apel', 'Durian', 'Jeruk'];

let s = '[';

for(let i=0; i<data.length; i++){
	s += '\'' + data[i] +'\'';
	if(i < data.length-1) s += ', ';
}

s += ']';
console.log('s :'+s)