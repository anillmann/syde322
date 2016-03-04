//  Andrew Illmann, 20413037  //
var bl = require('bl');
var http = require('http');
var path = process.argv[2];

http.get(path,function(response){
	var dataStream = new bl;
	response.on('data', function(data){
		dataStream.append(data);
	});
	response.on('end', function(end){
		var str = dataStream.toString();
		console.log(str.length);
		console.log(str);
	})
});
