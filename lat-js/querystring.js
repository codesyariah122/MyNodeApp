let http = require('http');
let url = require('url');
let qs = require('querystring');

let server = http.createServer(function(request, response) {
	let query = url.parse(request.url).query;
	let parameters = qs.parse(query);

	response.writeHead(200, {'Content-Type': 'text/html'});

	response.write('<strong>Nama Path:</strong>'
			+ url.parse(request.url).pathname + '<br/><br/>'
		);
	response.write('<strong>Daftar Parameter :</strong><br/>');

	for(let property in parameters){
		response.write(property + ': '+ parameters[property] + '<br/>');
	}

	response.end();
});

server.listen(3000);