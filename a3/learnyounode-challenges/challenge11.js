//  Andrew Illmann, 20413037
const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var fpath = process.argv[3];
var readStream = fs.createReadStream(fpath);

var server = http.createServer(function(req,res){
	readStream.pipe(res);
});
server.listen(port);
console.log('listening on port:' + port);