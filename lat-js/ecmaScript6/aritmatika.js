let readline = require('readline-sync')

let a = parseInt(readline.question('Masukan nilai a : '))
let b = parseInt(readline.question('Masukan nilai b : '))

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} + ${b} = ${a - b}`);
console.log(`${a} + ${b} = ${a * b}`);
console.log(`${a} + ${b} = ${a / b}`);