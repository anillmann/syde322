//  Andrew Illmann, 20413037
var fs = require('fs');
var fname = process.argv[2];
var lines = 0;
fs.readFile(fname,function(err, data){
	if (err) throw err;
	lines = data.toString().split('\n');
	console.log(lines.length - 1);
});