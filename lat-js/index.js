let http = require('http');

let moment = require('moment');

http.createServer(function(req, res){
	res.end("Hello World ! "+moment().format('D MMMM YYYY, h:mm:ss a'));
}).listen(8080);

console.log("server running on http://localhost:8080");