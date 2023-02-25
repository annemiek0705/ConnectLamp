const { Console } = require('console');
var http = require('http');
const { createSecureContext } = require('tls');


http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(req.url);
	res.write('The date and time currently are: ' );
	res.end();	
}).listen(8000)