var http = require("http");
function handleRequest(request, response) {
	console.log("Request object received");
	response.writeHead(200, { "Content‐Type": "text/plain" });
	response.write("Hello SYDE 322 students!");
	response.end();
}
http.createServer(handleRequest).listen(8080);
console.log("Node.js server running at localhost:8080");