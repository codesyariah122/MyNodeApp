const shell_exec = require('shell_exec').shell_exec;

const readline = require('readline-sync');

let answer = readline.question("Masukan domain yang akan ditracking : ");

let tracking = shell_exec("dig "+answer+"| awk '/^;; ANSWER SECTION:$/ {getline ; print $5}'");

let result = shell_exec('whois '+tracking);

console.log(result);