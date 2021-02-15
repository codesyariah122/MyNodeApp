let http = require('http');

let server = http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello <b>World</b>');
	res.end();
});

server.listen(8999);