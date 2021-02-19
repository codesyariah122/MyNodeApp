const http = require('http')

const fs = require('fs')

function css(req, res){
	if(req.url === '/styles.css'){
		res.writeHead(200, {'Content-Type':'text/css'})
		const fileContents = fs.readFileSync('./styles.css', {encoding:'utf-8'})
		res.write(fileContents)
		res.end()
	}
}

function js(req, res){
	if(req.url === '/promise.js'){
		res.writeHead(200, {'Content-Type':'text/javascript'})
		const fileContents = fs.readFileSync('./promise.css', {encoding:'utf-8'})
		res.write(fileContents)
		res.end()
	}
}

function renderHtml(path, res){
	fs.readFile(path, null, (err, data)=>{
		if(err){
			res.writeHead(404)
			res.write('File tidak ditemukan')
		}else{
			res.write(data)
		}
		res.end()
	})
}


const server = http.createServer((req, res) => {
	js(req, res)
	res.writeHead(200, {'Content-Type':'text/html'})
	renderHtml('./index.html', res)
}).listen(5151, ()=>{
	console.log("Aplikasi berjalan di port 5151")
})