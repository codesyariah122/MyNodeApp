const globalVar = 100;

function x(){
	const localVar = 200;

	console.log("Memanggil variable di dalam fungsi");
	console.log("globalVar : "+globalVar);
	console.log("localVar : "+localVar);
}

x();

console.log("\nMemanggil Variable diluar fungsi");
console.log("globalVar: "+globalVar);
// console.log("localVar: "+localVar);