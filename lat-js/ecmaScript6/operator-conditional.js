// let a = 10;
// let b = 20;

// let maks;

// maks = (a > b) ? a : b;

// console.log(maks)

let readline = require('readline-sync')

let a = parseInt(readline.question('Masukan bilangan bulat : '))
process.stdout.write(`${a} adalah bilangan `);
console.log((a % 2 == 0 ) ? 'genap' : 'ganjil');