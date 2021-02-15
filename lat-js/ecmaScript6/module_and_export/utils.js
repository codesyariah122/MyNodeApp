const f = () => {
	console.log("This is function f inside module")
}

const x = () => {
	console.log("This is function x inside module")
}

const P = 3.14


module.exports = {f, x, P}