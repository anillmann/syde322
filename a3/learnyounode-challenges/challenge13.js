//  Andrew Illmann, 20413037
const http = require('http');
var url = require('url');
var dispatcher = require('httpdispatcher');

var port = process.argv[2];



var server = http.createServer( function(req, res){
	var input = url.parse(req.url,true).query;
	var path = url.parse(req.url).pathname;

	var date = new Date(input.iso);

	var jsondate = JSON.stringify({
		"hour" : date.getHours(),
		"minute" : date.getMinutes(),
		"second" : date.getSeconds()
	});

	var unixdate = JSON.stringify({
		"unixtime" : date.getTime()
	});

	console.log(jsondate);
	console.log(unixdate);
	console.log(path);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	if (path == "/api/parsetime") {
		res.end(jsondate);
	} 
	if (path == "/api/unixtime") {
		res.end(unixdate);
	}

});
server.listen(port);

