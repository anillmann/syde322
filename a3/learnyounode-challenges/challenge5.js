var fs = require('fs');
var fname = process.argv[2];
var ext = process.argv[3];

fs.readdir(fname,function(err, files){
	for (x in files) {
		if (files[x].substring(files[x].length - ext.length - 1,files[x].length)=='.'+ext) {
			console.log(files[x]);
		}
	}
});