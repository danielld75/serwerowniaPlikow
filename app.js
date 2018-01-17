var fs = require('fs');
var http = require('http');
var server = http.createServer();
var content;
var img;

fs.readFile("./index.html", function (err, data) {
	if (err) throw err;
	content = data;
});

fs.readFile('./404_page.jpg', function(err, data) {
	if (err) throw err;
	img = data;
});

server.on('request', function (request, response) {
	response.setHeader("Content-type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		response.write(content);
		response.end();
	} else {
		response.writeHead(404, {"Content-type": "image/jpeg"});
		response.write(img);
		response.end();
	}
});

server.listen(8080);
