const http = require('http'), fs = require('fs')
const port = process.env.PORT || 3000

fs.readFile('./templates/index.html', (err, html) => {
	if(err){
		throw err;
	}

	http.createServer((req, res) => {
		res.writeHead(200, {'Content-Type':'text/html'})
		res.end(html)
	}).listen(port)

	console.log("Running on port : "+port)
})