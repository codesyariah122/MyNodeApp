// // const http = require('http')

// // http.createServer((req, res)=>{

// // 	if(req.url == '/'){
// // 		res.end("<h1>Halaman HomePage</h1>")
// // 	}else if(req.url == '/about'){
// // 		res.end("<h1>Halaman About</h1>")
// // 	}else if(req.url == '/contact'){
// // 		res.end("<h1>Halaman Contact</h1>")
// // 	}


// // }).listen(3000, () => {
// // 	console.log("Server running on port 3000")
// // })


// const http = require('http')

// const fs = require('fs')

// function renderHtml(path, res){
// 	fs.readFile(path, null, function(err, data){
// 		if(err){
// 			res.writeHead(404)

// 			res.write('File tidak ditemukan')
// 		}else{
// 			res.write(data)
// 		}
// 		res.end()
// 	})
// }

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/html'})
// 	renderHtml('./index.html', res)
// })

// server.listen(3000)

// const http = require('http')

// const fs = require('fs')

// const html = fs.readFileSync('./index.html');

// const server = http.createServer((req, res) => {
// 	const data = {"title":"Express is awesome"}
// 	res.writeHead(200, {'Content-Type': 'text/html'})
// 	res.end(html, {data})
// }).listen(3000)

// memanggil file statis css
// const http = require('http')

// const fs = require('fs')

// function css(req, res){
// 	if(req.url === '/styles.css'){
// 		res.writeHead(200, {'Content-Type':'text/css'})
// 		const fileContents = fs.readFileSync('./styles.css', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}
// }

// function renderHtml(path, res){
// 	fs.readFile(path, null, (err, data)=>{
// 		if(err){
// 			res.writeHead(404)
// 			res.write('File tidak ditemukan')
// 		}else{
// 			res.write(data)
// 		}
// 		res.end()
// 	})
// }


// const server = http.createServer((req, res) => {
// 	css(req, res)
// 	res.writeHead(200, {'Content-Type':'text/html'})
// 	renderHtml('./index.html', res)
// }).listen(5151, ()=>{
// 	console.log("Aplikasi berjalan di port 5151")
// })


// const http = require('http')

// const pug = require('pug')

// const ejs = require('ejs')

// const fs = require('fs')

// const port = process.env.PORT || 3000

// require('dotenv').config();

// const server = http.createServer((req, res) => {
// 	if(req.url === '/styles.css'){
// 		res.writeHead(200, {'Content-Type':'text/html'})
// 		let fileContents=fs.readFileSync('./styles.css', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}else if(req.url === '/promise.js'){
// 		res.writeHead(200, {'Content-Type':'text/html'})
// 		let fileContents=fs.readFileSync('./promise.js', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}else if(req.url == '/'){
// 		let data = {
// 			title: 'Home Page', 
// 			header: 'Welcome in my express application', 
// 			daftar:['Home', 'About', 'Contact'],
// 			link: ['/', '/about', '/contact']
// 		}

// 		let template = pug.renderFile('./templates/pug/index.pug', data)
// 		res.end(template)		
// 	}else if(req.url == '/about'){
// 		let data = {
// 			title: 'About Page', 
// 			header: 'This is About Page', 
// 			daftar:['Home', 'About', 'Contact'],
// 			link: ['/', '/about', '/contact']
// 		}		
// 		let template = pug.renderFile('./templates/pug/about.pug', data)
// 		res.end(template)
// 	}

// }).listen(port);

// console.log(`Server running on port ${port}`)


// const http = require('http')

// const pug = require('pug')

// const path = require('path')

// const server = http.createServer((req, res) => {
// 	if(req.url == '/'){
// 		let data = {
// 			title : 'Home Page',
// 			author: 'Puji Ermanto', 
// 			daftar: ['Home', 'About', 'Contact']
// 		}

// 	let template = pug.renderFile('./templates/index.pug', data)

// 	res.end(template)	
// 	}else if(req.url == '/about'){
// 		let data = {
// 			title : 'About Page',
// 			author: 'Puji Ermanto', 
// 			daftar: ['Home', 'About', 'Contact'],
// 			link: ['/', '/about', '/contact']
// 		}

// 	let template = pug.renderFile('./templates/about.pug', data)
// 	res.end(template)
// 	}else if(req.url == '/contact'){
// 		let data = {
// 			title : 'About Page',
// 			author: 'Puji Ermanto', 
// 			daftar: ['Home', 'About', 'Contact'],
// 			link: ['/', '/about', '/contact']
// 		}

// 		let template = pug.renderFile('./templates/about.pug', data)
// 		res.end(template)
// 	}
	
// }).listen(3000, () => {
// 	console.log("Server running on port 3000")
// })

// with sass styling
// const http = require('http')

// const fs = require('fs')

// const pug = require('pug')

// function css(req, res){
// 	if(req.url === '/styles.css'){
// 		res.writeHead(200, {'Content-Type': 'text/css'})
// 		let fileContents = fs.readFileSync('./styles.css', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}
// }

// const server = http.createServer((req, res) => {
// 	css(req, res)

// 	if(req.url == '/'){
// 		let data = {
// 			title : 'Home Page',
// 			header : 'Express Home Page',
// 			main: 'Express is Awesome',
// 			author: 'Puji Ermanto',
// 			daftar : ['Home', 'About', 'Contact'],
// 			link : ['/', '/about', '/contact'],

// 			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 		}


// 		let template = pug.renderFile('./templates/pug/index.pug', data)
// 		res.end(template)
// 	}else if(req.url == '/about'){
// 		let data = {
// 			title : 'About Page',
// 			header : 'Express About Page',
// 			main: 'About author',
// 			author: 'Puji Ermanto',
// 			daftar : ['Home', 'About', 'Contact'],
// 			link : ['/', '/about', '/contact'],
// 			content: 'Puji Ermanto as full stack developer from West Java Bandung he is work at PT. Gemilang Citrus Berjaya as a web developer',
// 		}

// 		let template = pug.renderFile('./templates/pug/about.pug', data)
// 		res.end(template)
// 	}else if(req.url == '/contact'){
// 		let data = {
// 			title : 'Contact Page',
// 			header : 'Express Contact Page',
// 			main: 'Author Contact',
// 			author: 'Puji Ermanto',
// 			daftar : ['Home', 'About', 'Contact'],
// 			link : ['/', '/about', '/contact'],
// 			content: [
// 				'phone: +62 882 2266 8778', 
// 				'email: pujiermanto@gmail.com',
// 				'instagram: @pujiermanto' 
// 			],
// 		}

// 		let template = pug.renderFile('./templates/pug/contact.pug', data)
// 		res.end(template)
// 	}
// }).listen(3000, () => {
// 	console.log("Server berjalan di port 3000")
// })

// interpolasi
// const http = require('http')

// const pug = require('pug')

// const qs = require('querystring')

// const fs = require('fs')

// function css(req, res){
// 	if(req.url === '/styles.css'){
// 		res.writeHead(200, {'Content-Type': 'text/css'})
// 		let fileContents = fs.readFileSync('./styles.css', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}else if(req.url === '/MyScript.js'){
// 		res.writeHead(200, {'Content-Type':'text/javascript'})
// 		let fileContents = fs.readFileSync('./MyScript.js', {encoding:'utf-8'})
// 		res.write(fileContents)
// 		res.end()
// 	}
// }

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type':'text/html'})
// 	css(req, res)
// 	if(req.url == '/'){
// 		switch(req.method){
// 			case 'GET':
// 				const template = pug.renderFile('./templates/pug/form.pug')
// 				res.end(template)
// 			break;

// 			case 'POST':
// 				let body = '';
// 				req.on('data', function(data){
// 					body += data;
// 				})

// 				req.on('end', function(){
// 					const form = qs.parse(body);
// 					const template = pug.renderFile('./templates/pug/interpolasi.pug', {name: form['nama'], email: form['email']})
// 					res.end(template)
// 				})
// 			break;
// 			default:
// 				res.end('Metode pengiriman tidak dikenal')
// 		}
// 	}
// }).listen(5000, () => {
// 	console.log("Server running on port 5000")
// })


// with consolidate
// const http = require('http');
// const fs = require('fs');
// const path = require('path');


// http.createServer(function (request, response) {
//     console.log('request ', request.url);

//     let filePath = '.' + request.url;
//     if (filePath == './') {
//         filePath = './templates/html/index.html';
//         console.log(request.originalUrl)
//     }else if(filePath == './about'){
//     	filePath = './templates/html/about.html';
//     }else if(filePath == './test'){
//         filePath = './templates/html/test.html';
//     }

//     const extname = String(path.extname(filePath)).toLowerCase();
//     const mimeTypes = {
//         '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//         '.gif': 'image/gif',
//         '.svg': 'image/svg+xml',
//         '.wav': 'audio/wav',
//         '.mp4': 'video/mp4',
//         '.woff': 'application/font-woff',
//         '.ttf': 'application/font-ttf',
//         '.eot': 'application/vnd.ms-fontobject',
//         '.otf': 'application/font-otf',
//         '.wasm': 'application/wasm'
//     };

//     const contentType = mimeTypes[extname] || 'application/octet-stream';

//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if(error.code == 'ENOENT') {
//                 fs.readFile('./404.html', function(error, content) {
//                     response.writeHead(404, { 'Content-Type': 'text/html' });

//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });

// }).listen(5151);
// console.log('Server running at http://127.0.0.1:5151/');
