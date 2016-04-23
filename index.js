const nodeStatic = require('node-static');

const fileServer = new nodeStatic.Server('./');

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    fileServer.serve(request, response);
  }).resume();
}).listen(8888);

console.log('View the content of this folder at:');
console.log('http://localhost:8888');
