const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const path = require('path');
const history = require('connect-history-api-fallback');

const serve = serveStatic(path.join(__dirname, 'static'), {
  index: ['index.html', 'index.htm']
});

const server = http.createServer(function onRequest(req, res) {
  const done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
