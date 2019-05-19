var http = require('http');
const url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color: red">I get your submit</h1>');
  res.end();
  let request_url = request.url;
}).listen(6006);