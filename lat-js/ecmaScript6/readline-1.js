// let readline = require('readline-sync')

// let a = readline.question('Masukan nilai a = ');
// let b = readline.question('Masukan nilai b = ');

// const c = a * b;

// console.log(a + 'X' + b + '=' +c);

let readline = require('readline-sync');

let a = readline.question("Masukan bilangan bulat : ");
let b = readline.question("Masukan bilangan riil : ");

console.log("\nSebelum konversi tipe data")
console.log("Tipe a : "+typeof a)
console.log("Tipe b : "+typeof b)

// konversi a dari tipe string ke bilangan bulat
a = parseInt(a)

// konversi b dari tipe string ke bilangan riil
b = parseFloat(b)

console.log("\n Setelah konversi tipe data")
console.log("Tipe a : "+typeof a)
console.log("Tipe b : "+typeof b)