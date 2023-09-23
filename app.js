const http = require('http')

http.createServer(function(req, res) {
	res.write("on the way");
	res.end();
}).listen(3000);

console.log("server started at 3000")


